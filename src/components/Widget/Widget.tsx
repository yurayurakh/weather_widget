import { useEffect, useRef, useState } from "react"
import WidgetSearch from "./WidgetSearch/WidgetSearch"
import WidgetCurrent from "./WidgetCurrent/WidgetCurrent"
import WidgetWeek from "./WidgetWeek/WidgetWeek"
import "./widget.scss"
import { getCities } from "../../api/location"
import { debounce } from "../../utils/debounce"

interface ISearchItem {
    id: number
    name: string
    country: string
    state?: string
    local_names: { [key: string]: string }
}

// function useDebounce(fn: Function, delay: number = 500) {
//     const timer = useRef(null)
//     const debounce = (...args: any[]) => {
//         if (timer.current) {
//             clearTimeout(timer.current)
//         }
//         timer.current = setTimeout(() => {
//             fn(...args)
//             timer.current = null
//         }, delay)
//     }
//     return [debounce]
// }

const Widget = () => {
    // const getSearchRegion = async (value: string) => {
    //     const cities = await getCities({ q: value })
    //     console.log(cities)
    // }

    const [searchValue, setSearchValue] = useState("")
    const [selectRegion] = useState("")
    const [searchList, setSearchList] = useState<ISearchItem[]>([]) // add type
    //  const [debounce] = useDebounce(getSearchRegion)

    const getSearchRegion = debounce(async (value: string) => {
        const cities = await getCities({ q: searchValue })
        // console.log(cities)
        // console.log(searchValue)
    })

    useEffect(() => {
        if (!searchValue.length) return
        getSearchRegion(searchValue)
    }, [searchValue])

    const onSearchRegion = (value: string) => {
        setSearchValue(value)
    }

    // console.log(getSearchRegion)

    const onSelectRegion = (value: number) => {
        // setSelectRegion(value)
        console.log(value)
    }

    const clearSearchList = () => {
        setSearchList([])
    }

    return (
        <div className="widget">
            <WidgetSearch
                searchValue={searchValue}
                searchList={searchList}
                onSearchRegion={onSearchRegion}
                onSelectRegion={onSelectRegion}
                clearSearchList={clearSearchList}
                selectRegion={selectRegion}
            />
            <WidgetCurrent />
            <WidgetWeek />
        </div>
    )
}

export default Widget
