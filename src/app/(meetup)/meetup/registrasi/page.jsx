'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  email: z.string().email({ message: 'Email must be valid.' }),
  nama: z.string().min(2, { message: 'Nama must be at least 2 characters.' }),
  telepon: z.string().regex(/^\d+$/, { message: 'Telepon must be a number.' }).min(10, { message: 'Telepon must be at least 10 digits.' }),
  minat: z.string().min(1, { message: 'Minat is required.' }),
  topik: z.string().min(1, { message: 'Topik is required.' }),
  domisili: z.string().min(1, { message: 'Domisili is required.' }),
  gelar: z.string().optional(),
  gender: z.enum(['Laki-Laki', 'Perempuan'], { message: 'Gender is required.' }),
  institusi: z.string().min(1, { message: 'Institusi is required.' }),
  sumberInfo: z.enum(['Instagram', 'Facebook', 'Teman', 'Lainnya'], { message: 'Sumber Info is required.' }),
  topikBerbagi: z.string().optional(),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      nama: '',
      telepon: '',
      minat: '',
      topik: '',
      domisili: '',
      gelar: '',
      gender: 'Male',
      institusi: '',
      sumberInfo: 'Social Media',
      topikBerbagi: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-10">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Data Diri</h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nama <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Nama Lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telepon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Telepon <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Nomor Telepon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="domisili"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domisili</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Kota/Provinsi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gelar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gelar Profesi</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Gelar Profesi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Kelamin</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Laki-Laki">Laki-Laki</SelectItem>
                      <SelectItem value="Perempuan">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Informasi Event</h2>
            <FormField
              control={form.control}
              name="minat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Minat <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Minat Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topik"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Topik yang ingin Anda dengar di meetup ini <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Topik yang ingin didengar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institusi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Institusi (Universitas, Perusahaan, Sekolah, Umum) <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Institusi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sumberInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sumber Informasi</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sumber informasi" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Instagram">Instagram</SelectItem>
                      <SelectItem value="Facebook">Facebook</SelectItem>
                      <SelectItem value="Teman">Teman</SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topikBerbagi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingin ikut berbagi? (masukkan topik)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Topik berbagi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500">
            Daftar
          </Button>
        </form>
      </Form>
    </div>
  );
}
