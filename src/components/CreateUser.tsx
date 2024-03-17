'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {Input} from "@nextui-org/react";
import { MailIcon } from './MailIcon';

interface FormData {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const CreateUser = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: '',
            },
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name.includes("address.")) {
            const [parentName, nestedName] = name.split(".");
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [nestedName]: value
                }
            }));
        } else if (name.includes("company.")) {
            const [parentName, nestedName] = name.split(".");
            setFormData(prevState => ({
                ...prevState,
                company: {
                    ...prevState.company,
                    [nestedName]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            // const response = await fetch('', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });
            // const data = await response.json();
            // if (!response.ok) {
            //     throw new Error(data.message || 'Something went wrong');
            // }

            console.log(formData)
            setSuccessMessage('User created successfully');
            setFormData({
                name: '',
                username: '',
                email: '',
                phone: '',
                website: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: '',
                    geo: {
                        lat: '',
                        lng: '',
                    },
                },
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: '',
                },
            });
        } catch (error) {
           console.error(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create User</h1>
        {errors.message && <p className="text-red-500 mb-4">{errors.message}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>


        <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui.org"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org/</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          label="Email"
          placeholder="nextui"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@gmail.com</span>
            </div>
          }
        />
        <Input
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
              </select>
            </div>
          }
          type="number"
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org</span>
            </div>
          }
        />
      </div>
    </div>  


            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50" disabled={loading}>Submit</button>
        </form>
    </div>
    );
};

export default CreateUser;
