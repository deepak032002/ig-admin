'use client'

import React from 'react'
import { Card, Button } from 'flowbite-react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import Breadcrumb from '@/designs/atoms/Breadcrumb'
import Typography from '@/designs/atoms/Typography'
import Input from '@/designs/atoms/Input'
import { useAdminUserCreate } from '@/hooks/api-hooks/use-user'
import { removeEmptyKey } from '@/utils/helper'

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm Password is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  mobile: Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
  dob: Yup.date(),
  gender: Yup.string(),
  profilePic: Yup.mixed(),
  role: Yup.string(),
  address: Yup.object({
    city: Yup.string(),
    state: Yup.string(),
    country: Yup.string(),
    pincode: Yup.string().matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits'),
  }),
})
const UserAddTemplate = () => {
  const { isPending: isPendingCreate, mutate: mutateCreate } = useAdminUserCreate()

  const formik = useFormik<UserCreateByAdminPostData>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      dob: '',
      gender: '',
      profilePic: '',
      role: 'AUTHOR',
      address: {
        city: '',
        state: '',
        country: '',
        pincode: '',
      },
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.info(values)
      mutateCreate(removeEmptyKey(values), {
        onSuccess: () => {
          toast.success('Successfully created')
          formik.resetForm()
        },
        onError: () => {
          toast.error('Failed to create')
        },
      })
    },
  })

  return (
    <div>
      <Breadcrumb
        linkList={[
          {
            name: 'User Add',
            link: '/user-add',
          },
        ]}
        pageName="User Add"
      />

      <form onSubmit={formik.handleSubmit}>
        <Card className="mt-6">
          <Typography size="bold-paragraph">Account Details</Typography>

          <Input
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
            label="Email"
            layout="horizontal"
            placeholder="Enter email"
            required
            type="text"
          />

          <Input
            {...formik.getFieldProps('password')}
            error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
            label="Password"
            layout="horizontal"
            placeholder="Enter password"
            required
            type="password"
          />

          <Input
            {...formik.getFieldProps('confirmPassword')}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
            label="Confirm Password"
            layout="horizontal"
            placeholder="Enter confirm password"
            required
            type="password"
          />

          <hr className="-mx-6 my-6 dark:border-strokedark" />

          <Typography size="bold-paragraph">Personal Info</Typography>

          <Input
            {...formik.getFieldProps('firstName')}
            error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : undefined}
            label="First Name"
            layout="horizontal"
            placeholder="Enter First Name"
            required
            type="text"
          />

          <Input
            {...formik.getFieldProps('lastName')}
            error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : undefined}
            label="Last Name"
            layout="horizontal"
            placeholder="Enter Last Name"
            required
            type="text"
          />

          <Input
            {...formik.getFieldProps('phone')}
            error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
            label="Mobile"
            layout="horizontal"
            placeholder="Enter Mobile no."
            required
            type="tel"
          />

          <Input
            {...formik.getFieldProps('dob')}
            error={formik.touched.dob && formik.errors.dob ? formik.errors.dob : undefined}
            label="DOB"
            layout="horizontal"
            placeholder="Enter Date of Birth"
            type="date"
          />

          <Input
            {...formik.getFieldProps('gender')}
            error={formik.touched.gender && formik.errors.gender ? formik.errors.gender : undefined}
            label="Gender"
            layout="horizontal"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            type="select"
          />

          <Input
            {...formik.getFieldProps('role')}
            error={formik.touched.role && formik.errors.role ? formik.errors.role : undefined}
            label="Role"
            layout="horizontal"
            options={[
              { value: 'ADMIN', label: 'Admin' },
              { value: 'AUTHOR', label: 'Author' },
            ]}
            type="select"
          />

          <hr className="-mx-6 my-6 dark:border-strokedark" />

          <Typography size="bold-paragraph">Address Details</Typography>

          <Input
            {...formik.getFieldProps('city')}
            error={
              formik.touched.address?.city && formik.errors.address?.city ? formik.errors.address?.city : undefined
            }
            label="City"
            layout="horizontal"
            placeholder="Enter city"
            type="text"
          />

          <Input
            {...formik.getFieldProps('address.state')}
            error={
              formik.touched.address?.state && formik.errors.address?.state ? formik.errors.address?.state : undefined
            }
            label="State"
            layout="horizontal"
            placeholder="Enter state"
            type="text"
          />

          <Input
            {...formik.getFieldProps('address.country')}
            error={
              formik.touched.address?.country && formik.errors.address?.country
                ? formik.errors.address?.country
                : undefined
            }
            label="Country"
            layout="horizontal"
            placeholder="Enter country"
            type="text"
          />

          <Input
            {...formik.getFieldProps('address.pincode')}
            error={
              formik.touched.address?.pincode && formik.errors.address?.pincode
                ? formik.errors.address?.pincode
                : undefined
            }
            label="Pin code"
            layout="horizontal"
            placeholder="Enter pin code"
            type="text"
          />

          <div>
            <Button className="bg-primary" isProcessing={isPendingCreate} type="submit">
              Submit
            </Button>
          </div>
        </Card>
      </form>
    </div>
  )
}

export default UserAddTemplate
