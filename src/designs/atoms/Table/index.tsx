'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Button } from 'flowbite-react'
import { HiMiniChevronUpDown, HiMiniChevronUp, HiMiniChevronDown } from 'react-icons/hi2'
import { IoInformationCircleOutline } from 'react-icons/io5'
import Link from 'next/link'
import { Tooltip } from 'flowbite-react'
import { PiPlusCircleBold } from 'react-icons/pi'
import { Dropdown } from 'flowbite-react'

import Typography from '../Typography'
import { ScrollTrigger } from '../ScrollTrigger'
import Loader from '../Loader'
import Input from '../Input'

import { TableIcon } from '@/asset/icon'
import { cn } from '@/utils/helper'
import useDebounce from '@/hooks/useDebounce'

const HaveLink: React.FC<{ isLink?: boolean; children: React.ReactNode; href: string; className?: string }> = ({
  isLink,
  children,
  href,
  className,
}) => {
  return isLink ? (
    <Link className={cn('block', className)} href={href}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  )
}

function Table<T>({
  columns,
  data,
  className,
  isLoading,
  activePagination,
  pagination,
  isSearch = false,
  onSearch,
  isAdd = false,
  onAdd,
  isLink = false,
  href,
  heading,
  addButtonText,
  isSortBy = false,
  onSortBy,
  sortByOptions,
}: TableProps<T>): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce(search, 1000)
  const [sortedData, setSortedData] = useState<T[]>()
  const [sortType, setSortType] = useState<SortType>('default')
  const [sortByVal, setSortByVal] = useState<string>('')

  useEffect(() => {
    if (onSearch) onSearch(window.encodeURIComponent(debouncedSearch))
  }, [debouncedSearch, onSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSort = useCallback(
    (key: string) => {
      setSortType(sortType === 'default' ? 'asc' : sortType === 'asc' ? 'desc' : 'default')
      if (key) {
        const sortData = data.sort((a: any, b: any) => {
          if (sortType === 'desc') return 0
          if (typeof a[key] === 'string') {
            return sortType === 'default' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
          } else {
            return sortType === 'default' ? a[key] - b[key] : b[key] - a[key]
          }
        })

        setSortedData(sortData)
      }
    },
    [data, sortType]
  )

  useEffect(() => {
    setSortedData(data)
  }, [data])

  return (
    <>
      <div className="mb-6 flex items-center justify-between px-4">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">{heading}</h2>
        <div className="flex gap-4">
          {isSortBy && (
            <>
              <Dropdown
                inline
                label=""
                renderTrigger={() => (
                  <div className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-1000 px-4 py-2 font-semibold text-neutral-600 dark:border-neutral-400">
                    <span className="h-5 w-5">
                      <TableIcon.SortBy />
                    </span>
                    {sortByVal || 'Sort By'}
                  </div>
                )}
              >
                {sortByOptions &&
                  sortByOptions.map(item => (
                    <Dropdown.Item
                      key={item.value}
                      onClick={() => {
                        setSortByVal(item.key)
                        onSortBy?.(item.value)
                      }}
                    >
                      {item.key}
                    </Dropdown.Item>
                  ))}
              </Dropdown>
            </>
          )}

          <div className="search flex-1">
            {isSearch && (
              <Input
                className="rounded-full p-3"
                icon={<IoSearch />}
                inputBorderRadius="40px"
                inputWrapperClassName="h-[44px]"
                isIcon
                placeholder="Search..."
                value={search}
                wrapperClassName="w-full md:w-[300px] mb-0 h-full"
                onChange={handleChange}
                layout="horizontal"
                type="text"
              />
            )}
          </div>

          {isAdd && (
            <>
              <Button
                className=""
                theme={{
                  inner: {
                    base: 'flex items-center transition-all duration-200',
                  },
                }}
                onClick={() => onAdd?.()}
              >
                <PiPlusCircleBold className="me-2" size={24} /> {addButtonText || 'Add'}
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="rounded-lg bg-white dark:bg-boxdark">
        <div className="w-full overflow-x-auto">
          <table className={cn(`w-max lg:w-full`, className)}>
            <thead>
              <tr>
                {columns.map((column, index) => {
                  return (
                    <th
                      className="text-left[&:first-child]:ps-2 px-2 py-4 [&:first-child]:md:ps-10 [&:last-child]:pe-2 [&:last-child]:md:pe-10"
                      key={index}
                      style={{ width: column.width }}
                    >
                      <div
                        className={cn(
                          'flex items-center gap-2',
                          { 'justify-center': column.align === 'center' },
                          { 'justify-start': column.align === 'left' },
                          { 'justify-end': column.align === 'right' }
                        )}
                      >
                        {column.info && (
                          <Tooltip content={column.info}>
                            <IoInformationCircleOutline className="text-neutral-300 dark:text-bodydark" size={18} />
                          </Tooltip>
                        )}
                        <Typography
                          className={cn(`font-bold text-neutral-300 dark:text-bodydark`, column.headingClassName)}
                        >
                          {column.name}
                        </Typography>

                        {column.sort && (
                          <div className="cursor-pointer" onClick={() => handleSort(column.dataKey as string)}>
                            {sortType === 'default' ? (
                              <HiMiniChevronUpDown className="text-neutral-800 dark:text-bodydark" size={18} />
                            ) : sortType === 'asc' ? (
                              <HiMiniChevronUp className="text-neutral-800 dark:text-bodydark" size={18} />
                            ) : (
                              <HiMiniChevronDown className="text-neutral-800 dark:text-bodydark" size={18} />
                            )}
                          </div>
                        )}
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-boxdark">
              {sortedData && sortedData.length > 0 ? (
                sortedData.map((item, index) => {
                  return (
                    <tr className="[&:last-child>td]:border-b-0" key={index}>
                      {columns.map((column, index) => {
                        return (
                          <td
                            className={`border-t border-stroke px-2 py-4 text-left dark:border-strokedark ${
                              isLink
                                ? '[&:first-child>a]:ps-2 [&:first-child>a]:md:ps-10 [&:last-child>a]:pe-2 [&:last-child>a]:md:pe-10'
                                : '[&:first-child]:ps-2 [&:first-child]:md:ps-10 [&:last-child]:pe-2 [&:last-child]:md:pe-10'
                            }`}
                            key={index}
                            style={{ width: column.width, textAlign: column.align }}
                          >
                            <HaveLink
                              className={cn(
                                'flex items-center gap-2',
                                { 'justify-center': column.align === 'center' },
                                { 'justify-start': column.align === 'left' },
                                { 'justify-end': column.align === 'right' }
                              )}
                              href={href?.(item) || ''}
                              isLink={isLink}
                            >
                              <Typography
                                className={cn(
                                  `font-normal capitalize text-neutral-400 dark:text-bodydark`,
                                  column.itemClassName
                                )}
                                size="paragraph"
                              >
                                {item ? column?.selector(item) : '-'}
                              </Typography>
                            </HaveLink>
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              ) : (
                <>
                  {isLoading ? (
                    <tr>
                      <td colSpan={columns.length}>
                        <div className="flex h-full w-full items-center justify-center overflow-hidden py-2">
                          <div className="animate-spin">
                            <Loader className="h-[36px] w-[36px]" wrapperClassName="h-fit dark:bg-transparent" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      {!pagination?.isFetching && (
                        <td colSpan={columns.length}>
                          <Typography className="my-6 text-center dark:text-[#989898]" size="paragraph">
                            No Records Found
                          </Typography>
                        </td>
                      )}
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        {activePagination && (
          <ScrollTrigger
            isLoading={!isLoading && pagination.isFetching}
            onTrigger={() => {
              if (!isLoading && !pagination.isFetchingNextPage && pagination.hasNextPage) {
                pagination.fetchNextPage?.()
              }
            }}
          />
        )}
      </div>
    </>
  )
}

/**
 * Renders a table component with the given columns, data, and optional features such as search, pagination, and add button.
 *
 * @param {TableProps<T>} props - The props object containing the following properties:
 *   - columns: An array of column objects defining the table columns.
 *   - data: An array of data objects to be rendered in the table.
 *   - className: Optional CSS class name for the table.
 *   - isLoading: A boolean indicating whether the table is in a loading state.
 *   - activePagination: A boolean indicating whether pagination is active.
 *   - pagination: An object containing pagination-related properties and functions.
 *   - isSearch: A boolean indicating whether search functionality is enabled.
 *   - onSearch: A function to be called when the search input value changes.
 *   - isAdd: A boolean indicating whether an add button should be displayed.
 *   - onAdd: A function to be called when the add button is clicked.
 *   - isLink: A boolean indicating whether the table rows should be wrapped in a link.
 *   - href: A function that returns the URL for a table row.
 * @return {JSX.Element} The rendered table component.
 */
export default React.memo(Table) as typeof Table
