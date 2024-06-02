import "./search.scss"

interface ISearchItem {
    id: number
    name: string
    country: string
    state?: string
    local_names: { [key: string]: string }
}

interface IProps {
    searchValue: string
    searchList: ISearchItem[] // add type
    onSearchRegion: (value: string) => void
    onSelectRegion: (value: number) => void
    clearSearchList: () => void
    selectRegion: string
}

const WidgetSearch = ({
    searchValue = "",
    searchList,
    onSearchRegion,
    onSelectRegion,
    clearSearchList,
    selectRegion = "",
}: IProps) => {
    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        onSearchRegion(value)
    }

    const searchClasses = ["search", searchValue ? "hasValue" : ""] // isSearchable

    return (
        <div className={searchClasses.join(" ")} id="search">
            <div className="search__field">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Enter city"
                    onInput={onInput}
                    value={searchValue}
                />
                <button
                    className="search__remove"
                    onClick={clearSearchList}
                ></button>
            </div>
            <div className="search__block">
                <ul className="search__list">
                    {searchList.map((item: ISearchItem) => (
                        <WidgetSearchItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            onClick={onSelectRegion}
                        />
                    ))}
                </ul>
            </div>
            <div className="search__result">
                <div className="search__result_title">Selected:</div>
                <div className="search__result_value">{selectRegion}</div>
            </div>
        </div>
    )
}

interface IWidgetSearchItem {
    id: number
    name: string
    onClick: (id: number) => void
}

const WidgetSearchItem = ({ id, name, onClick }: IWidgetSearchItem) => {
    return (
        <li className="search__item" onClick={onClick.bind(this, id)}>
            {name}
        </li>
    )
}

export default WidgetSearch
