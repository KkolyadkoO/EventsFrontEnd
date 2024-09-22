import './styles.css';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {CategoryOfEventResponse} from "../../types/response/CategoryOfEventResponse";
import {CategoryOfEventService} from "../../api/services/CategoryOfEventService";

interface HeaderProps {
    onSearch?: (value: string) => void;
    onCategory?: (value: string) => void;
    onStartDate?: (value: string) => void;
    onEndDate?: (value: string) => void;
}

const Header = ({onSearch, onCategory, onEndDate, onStartDate}: HeaderProps) => {
    const {store} = useContext(Context);
    const [categories, setCategories] = useState<CategoryOfEventResponse[]>([]);
    const navigate = useNavigate();
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await CategoryOfEventService.getAllCategories();
                setCategories(response.data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchCategories();
    }, []);

    const handleOnClick = () => {
        store.Logout();
        navigate("/");
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch && onSearch(e.target.value);
    };


    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
        onCategory && onCategory(e.target.value);
    };

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
        onStartDate && onStartDate(e.target.value);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
        onEndDate && onEndDate(e.target.value);
    };

    const handleClearFilters = () => {
        setSearchTerm("");
        onSearch && onSearch("");
        setCategory("");
        onCategory && onCategory("");
        setStartDate("");
        onStartDate && onStartDate("");
        setEndDate("");
        onEndDate && onEndDate("");
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Events.by</Link>
            </div>
            {(location.pathname === '/' || location.pathname === '/admin_page') && (
                <div className="filters">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search events..."
                    />
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))}
                    </select>
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        placeholder="Start Date"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        placeholder="End Date"
                    />
                    <button onClick={handleClearFilters}>Clear</button>
                </div>
            )}

            <div className="auth-buttons">
                {store.user.role === "Admin" && (
                    <Link to="/admin_page">Admin page</Link>
                )}
                {!store.isAuth ? (
                    <>
                        <Link to="/login">Log in</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">{store.user.userName}</Link>
                        <button id="logout" onClick={handleOnClick}>Log out</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default observer(Header);
