'use client'

import { useTranslation } from "react-i18next"
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { Asterisk } from "lucide-react";


const schema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("El email no es válido"),
    subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
    phone: z.string().length(10, "El teléfono debe tener al menos 10 caracteres"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});

type FormFields = z.infer<typeof schema>

export const ContactForm = ({ className = "" }) => {
    const { t } = useTranslation();
    const { register, handleSubmit, setError, formState: { errors, isSubmitting }, reset } = useForm<FormFields>({ resolver: zodResolver(schema), context: { t } });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderName: data.name,
                    senderEmail: data.email,
                    senderSubject: data.subject,
                    senderPhone: data.phone,
                    senderMessage: data.message,
                }),
            });

            if (response.ok) {
                toast.success('Message sent successfully');
                reset();
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to send email');
            }

        } catch (error) {
            toast.error('An error occurred while submitting the form');
            console.error(error);
        }
    }

    return (
        <section className={`flex flex-col h-fit gap-[40px] sm:gap-[70px] bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[60px] sm:px-[40px] sm:py-[60px] overflow-hidden ${className}`}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-orangePrimary text-2xl md:text-3xl font-semibold mb-3">{t('contact:contactForm.title')}</h2>
                <p className="text-gray text-sm md:text-base mb-3 text-textGray">{t('contact:contactForm.text')}</p>
                <div className="h-[1px] w-full bg-textGray mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('contact:form.name')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('name')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="text" placeholder={t('contact:form.name')} />
                        {errors.name && <span className="text-error text-sm">{errors.name.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('contact:form.email')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('email')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="email" placeholder={t('contact:form.email')} />
                        {errors.email && <span className="text-error text-sm">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('contact:form.subject')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('subject')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="text" placeholder={t('contact:form.subject')} />
                        {errors.subject && <span className="text-error text-sm">{errors.subject.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex ">
                            <label className="mb-[6px]">{t('contact:form.phone')}</label>
                            <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                        </div>
                        <input {...register('phone')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" type="text" placeholder={t('contact:form.phone')} />
                        {errors.phone && <span className="text-error text-sm">{errors.phone.message}</span>}
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex ">
                        <label className="mb-[6px]">{t('contact:form.message')}</label>
                        <Asterisk className="text-orangePrimary ml-[2px]" size={14} />
                    </div>
                    <textarea {...register('message')} className="bg-pageBG border-none rounded-md px-4 py-2 text-textGray" rows={5} placeholder={t('contact:form.message')}></textarea>
                    {errors.message && <span className="text-error text-sm">{errors.message.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="bg-orangePrimary hover:bg-orangePrimaryHover border-[1px] shadow-lg shadow-orangePrimary/25 border-contactBtnBG text-white font-bold py-2 px-4 rounded-[7px] flex items-center w-fit min-w-fit">{isSubmitting ? t('contact:form.sending') : t('contact:form.submit')}</button>

            </form>

        </section>
    )
}