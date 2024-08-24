type SortType = 'asc' | 'desc' | 'default'

interface ColumnProps<T> {
  name: string
  selector: (item: T) => React.ReactNode
  width?: string
  align?: 'left' | 'right' | 'center'
  headingClassName?: string
  itemClassName?: string
  sort?: boolean
  dataKey?: keyof T
  info?: string
}

interface Pagination {
  isFetchingNextPage: boolean
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetching: boolean
}

interface TablePropsWithPagination {
  activePagination: true
  pagination: Pagination
}

interface TablePropsWithoutPagination {
  activePagination: false
  pagination?: undefined
}

interface ActiveSortBy {
  isSortBy: true
  onSortBy: (key: string) => void
  sortByOptions: { value: string; key: string }[]
}

interface DisableSortBy {
  isSortBy: false
  onSortBy?: undefined
  sortByOptions?: undefined
}

type TableProps<T> = (TablePropsWithPagination | TablePropsWithoutPagination) &
  (ActiveSortBy | DisableSortBy) & {
    data: T[]
    columns: ColumnProps<T>[]
    className?: string
    isLoading?: boolean
    href?: (item: T) => string
    isLink?: boolean
    isSearch?: boolean
    onSearch?: (value: string) => void
    isAdd?: boolean
    onAdd?: () => void
    heading?: string
    addButtonText?: string
  }
