import React, { useState, useEffect } from 'react';
import './App.css';
//import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import { listItems } from './graphql/queries';
import { createItem as createItemMutation, deleteItem as deleteItemMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';

const initialFormState = { title: '', category: '', description: '', email: '', lat: '', lon: '', latLong: '', phone: '', price: '',textNumber: '', url: '', ownerID: '' }

function App() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    
    useEffect(() => {
        fetchItems();
    }, []);

    async function fetchItems() {
        const apiData = await API.graphql({ query: listItems });
        const itemsFromAPI = apiData.data.listItems.items;
            await Promise.all(itemsFromAPI.map(async item => {
                if (item.image) {
                    const image = await Storage.get(item.image);
                    item.image = image;
                }
                return item;
            }))
            setItems(apiData.data.listItems.items);
    }
    async function createItem() {
        if (!formData.title || !formData.description) return;
        const user = await Auth.currentUserInfo();
        
        formData.ownerID = user.attributes['sub'];

        await API.graphql({ query: createItemMutation, variables: { input: formData } });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setItems([...items, formData]);
        setFormData(initialFormState);
    }

    async function deleteItem({ id }) {
        const newItemsArray = items.filter(item => item.id !== id);
        setItems(newItemsArray);
        await API.graphql({ query: deleteItemMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchItems();
    }

    return (
        <div className="App">
            <h1>My Links App</h1>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'title': e.target.value })}
                placeholder="Title"
                value={formData.title}
                />  
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                placeholder="Description"
                value={formData.description}
                />
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'category': e.target.value })}
                placeholder="Category"
                value={formData.category}
                />
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'email': e.target.value })}
                placeholder="Email"
                value={formData.email}
                />
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'phone': e.target.value })}
                placeholder="Contact Phone"
                value={formData.phone}
                />
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'textNumber': e.target.value })}
                placeholder="Text Number"
                value={formData.textNumber}
                />
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'price': e.target.value })}
                placeholder="Price"
                value={formData.price}
                />
            </div>
            <div>
            <input
                onChange={e => setFormData({ ...formData, 'url': e.target.value })}
                placeholder="More Info URL"
                value={formData.url}
                />
            </div>
            <div>
            <input
                type="file"
                onChange={onChange}
                />
                </div>
            <button onClick={createItem}>Create Item</button>
            <div style={{ marginBottom: 30 }}>
                {
                    items.map(item => (
                        <div key={item.id || item.title}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                            <p>{item.email}</p>
                            <p>{item.textNumber}</p>
                            <p>{item.phone}</p>
                            <p>{item.url}</p>
                            <p>{item.price}</p>
                            <button onClick={() => deleteItem(item)}>Delete item</button>
                            {
                                item.image && <img src={item.image} style={{ width: 400 }} />
                            }
                        </div>
                    ))
                }
            </div>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);
