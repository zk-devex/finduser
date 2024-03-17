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
          value={formData.name}
            onChange={handleChange}
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />


<Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          id="username" name="username" value={formData.username} onChange={handleChange}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
                </div>

                
            </div>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            {/* Add other input fields similarly */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</label>
                <input type="text" id="address.street" name="address.street" value={formData.address.street} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="suite" className="block text-sm font-medium text-gray-700">Suite</label>
                <input type="text" id="address.suite" name="address.suite" value={formData.address.suite} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="address.city" value={formData.address.city} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
                <input type="text" id="zipcode" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="lat" className="block text-sm font-medium text-gray-700">Latitude</label>
                <input type="text" id="address.geo.lat" name="address.geo.lat" value={formData.address.geo.lat} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="lng" className="block text-sm font-medium text-gray-700">Longitude</label>
                <input type="text" id="address.geo.lng" name="address.geo.lng" value={formData.address.geo.lng} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" id="company.name" name="company.name" value={formData.company.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="catchPhrase" className="block text-sm font-medium text-gray-700">Catch Phrase</label>
                <input type="text" id="company.catchPhrase" name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="bs" className="block text-sm font-medium text-gray-700">BS</label>
                <input type="text" id="company.bs" name="company.bs" value={formData.company.bs} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50" disabled={loading}>Submit</button>
        </form>
    </div>
    );
};

export default CreateUser;
