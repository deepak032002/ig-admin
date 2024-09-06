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
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, 'Pincode must be exactly 6 digits')
      .required('Pincode is required'),
  }),
})
const UserAddTemplate = () => {
  const { isPending: isPendingCreate, mutate: mutateCreate } = useAdminUserCreate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      mobile: '',
      dob: '',
      gender: '',
      profilePic: '',
      role: '',
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
      mutateCreate(values, {
        onSuccess: () => {
          toast.success('Successfully created')
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
            label="Email"
            layout="horizontal"
            placeholder="Enter email"
            type="text"
            error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
            required
          />

          <Input
            {...formik.getFieldProps('password')}
            label="Password"
            layout="horizontal"
            placeholder="Enter password"
            type="password"
            error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
            required
          />

          <Input
            {...formik.getFieldProps('confirmPassword')}
            label="Confirm Password"
            layout="horizontal"
            placeholder="Enter confirm password"
            type="password"
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
            required
          />

          <hr className="-mx-6 my-6" />

          <Typography size="bold-paragraph">Personal Info</Typography>

          <Input
            {...formik.getFieldProps('firstName')}
            label="First Name"
            layout="horizontal"
            placeholder="Enter First Name"
            type="text"
            error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : undefined}
            required
          />

          <Input
            {...formik.getFieldProps('lastName')}
            label="Last Name"
            layout="horizontal"
            placeholder="Enter Last Name"
            type="text"
            error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : undefined}
            required
          />

          <Input
            {...formik.getFieldProps('dob')}
            label="DOB"
            layout="horizontal"
            placeholder="Enter Date of Birth"
            type="date"
            error={formik.touched.dob && formik.errors.dob ? formik.errors.dob : undefined}
          />

          <Input
            {...formik.getFieldProps('mobile')}
            label="Mobile"
            layout="horizontal"
            placeholder="Enter Mobile no."
            type="tel"
            error={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : undefined}
          />

          <Input
            {...formik.getFieldProps('gender')}
            label="Gender"
            layout="horizontal"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            type="select"
            error={formik.touched.gender && formik.errors.gender ? formik.errors.gender : undefined}
          />

          <Input
            {...formik.getFieldProps('role')}
            label="Role"
            layout="horizontal"
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'author', label: 'Author' },
            ]}
            type="select"
            error={formik.touched.role && formik.errors.role ? formik.errors.role : undefined}
          />

          <hr className="-mx-6 my-6" />

          <Typography size="bold-paragraph">Address Details</Typography>

          <Input
            {...formik.getFieldProps('city')}
            label="City"
            layout="horizontal"
            placeholder="Enter city"
            type="text"
            error={
              formik.touched.address?.city && formik.errors.address?.city ? formik.errors.address?.city : undefined
            }
          />

          <Input
            {...formik.getFieldProps('address.state')}
            label="State"
            layout="horizontal"
            placeholder="Enter state"
            type="text"
            error={
              formik.touched.address?.state && formik.errors.address?.state ? formik.errors.address?.state : undefined
            }
          />

          <Input
            {...formik.getFieldProps('address.country')}
            label="Country"
            layout="horizontal"
            placeholder="Enter country"
            type="text"
            error={
              formik.touched.address?.country && formik.errors.address?.country
                ? formik.errors.address?.country
                : undefined
            }
          />

          <Input
            {...formik.getFieldProps('address.pincode')}
            label="Pin code"
            layout="horizontal"
            placeholder="Enter pin code"
            type="text"
            error={
              formik.touched.address?.pincode && formik.errors.address?.pincode
                ? formik.errors.address?.pincode
                : undefined
            }
          />

          <div>
            <Button type="submit" className="bg-primary" isProcessing={isPendingCreate}>
              Submit
            </Button>
          </div>
        </Card>
      </form>
    </div>
  )
}

export default UserAddTemplate
