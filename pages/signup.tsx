import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import React, { useState } from 'react';
import Link from 'next/link';
import Register from '@/components/register/Register';

const SignUpForm = () => {
   return (
        <>
            <Register />
        </>
    )
}

SignUpForm.getLayout = useDefaultLayout;
export default SignUpForm;