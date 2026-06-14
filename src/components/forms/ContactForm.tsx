import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSejxwrYW4mm416L2FiRbhLEftvQdq6zZEroadySR95YvxxjLA/formResponse";

      // Use a hidden iframe + native form POST to bypass CORS restrictions.
      // fetch() with no-cors gets blocked by browsers for Google domains.
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const hiddenForm = document.createElement('form');
      hiddenForm.action = FORM_URL;
      hiddenForm.method = 'POST';
      hiddenForm.target = 'hidden_iframe';
      hiddenForm.style.display = 'none';

      const fields: Record<string, string> = {
        'entry.382250599': data.name,
        'entry.738783265': data.email,
        'entry.2096459469': data.message,
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        hiddenForm.appendChild(input);
      });

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();

      // Clean up after submission
      setTimeout(() => {
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 2000);

      // Redirect to WhatsApp API
      const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n\n*Message:*\n${data.message}`;
      const whatsappUrl = `https://wa.me/919501951191?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      form.setError('root', { message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="glass-card rounded-xl p-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}>
          <CheckCircle2 className="size-16 mx-auto text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Name</FormLabel>
            <FormControl><Input placeholder="Your name" className="glass-card" {...field} /></FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )} />

        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Email</FormLabel>
            <FormControl><Input type="email" placeholder="your@email.com" className="glass-card" {...field} /></FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )} />

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Message</FormLabel>
            <FormControl><Textarea placeholder="Your message..." className="min-h-32 glass-card resize-none" {...field} /></FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )} />

        {form.formState.errors.root && (
          <div className="text-sm text-destructive">{form.formState.errors.root.message}</div>
        )}

        <Button type="submit" className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium" disabled={isSubmitting}>
          {isSubmitting ? (<><Loader2 className="mr-2 size-5 animate-spin" />Sending...</>) : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
