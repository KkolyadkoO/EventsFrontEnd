import React, {useContext, useEffect, useState} from 'react';
import './styles.css';
import {useNavigate} from "react-router-dom";
import {Context} from "../../../index";
import {CategoryOfEventService} from "../../../api/services/CategoryOfEventService";
import {CategoryOfEventResponse} from "../../../types/response/CategoryOfEventResponse";
import {EventsResponse} from "../../../types/response/EventsResponse";
import {EventsService} from "../../../api/services/EventsService";
import {observer} from "mobx-react-lite";

type Props = {
    eventId: string | undefined;
}

const EditEventForm = ({eventId}:Props) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryOfEventResponse[]>([]);
    const [title,setTitle] = useState('');
    const [newCategoryTitle, setNewCategoryTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [locationId, setLocationId] = useState('');
    const [maxNumberOfMembers, setMaxNumberOfMembers] = useState<number>(0);
    const [categoryId, setCategoryId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const {store} = useContext(Context);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await EventsService.getEventById(eventId);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setDate(response.data.date.substring(0, 10));
                setLocationId(response.data.location);
                setMaxNumberOfMembers(response.data.maxNumberOfMembers);
                setCategoryId(response.data.categoryId);
                setImageUrl(response.data.imageUrl);
            } catch (e) {
                console.error(e);
            }
        }
        fetchEvent();
    }, []);

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

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            // await store.Login(userName, password);
            // navigate("/");
        } catch (e: any){
            console.error(e.response.data);
        }
    }

    return (
        <form className='LoginForm' onSubmit={handleLogin}>
            <h1>Edit EVENT</h1>
            <input
                type="text"
                name="title"
                placeholder="Enter Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Enter Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <input
                type="date"
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
            />
            <input
                type="number"
                name="maxNumberOfMembers"
                placeholder="Enter maximum number of members"
                value={maxNumberOfMembers}
                onChange={e => setMaxNumberOfMembers(parseInt(e.target.value))}
                required
            />
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.title}</option>
                ))}
                <option value="another">Another</option>
            </select>
            {categoryId === "another" && (
                <input
                    type="text"
                    name="newCategoryTitle"
                    placeholder="Enter title of category"
                    value={newCategoryTitle}
                    onChange={e => setNewCategoryTitle(e.target.value)}
                    required
                />
            )}
            <button type="submit">Edit</button>
        </form>
    );
};

export default observer(EditEventForm);
