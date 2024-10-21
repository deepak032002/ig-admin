'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Button, Card } from 'flowbite-react'
import { useFormik } from 'formik'

import Breadcrumb from '@/designs/atoms/Breadcrumb'
import Typography from '@/designs/atoms/Typography'
import Input from '@/designs/atoms/Input'

const Editor = dynamic(() => import('@/designs/organisms/Editor').then(mod => mod.default), { ssr: false })

const AddArticleTemplate = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: () => {},
  })

  return (
    <div>
      <Breadcrumb
        linkList={[
          {
            name: 'Article Add',
            link: '/article-add',
          },
        ]}
        pageName="Article Add"
      />

      <Card className="mt-6">
        <Typography size="bold-paragraph">Basic Details</Typography>

        <Input
          {...formik.getFieldProps('title')}
          error={formik.touched.title && formik.errors.title ? formik.errors.title : undefined}
          label="Title"
          layout="horizontal"
          placeholder="Enter your Title"
          required
          type="text"
        />

        <hr className="-mx-6 my-6 dark:border-strokedark" />

        <Typography size="bold-paragraph">Content</Typography>

        <Editor />

        <div>
          <Button className="bg-primary" isProcessing={false} type="submit">
            Submit
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default AddArticleTemplate
