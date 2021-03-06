import React, { useState, useEffect } from 'react';
import './App.css';
//import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import { listItems } from './graphql/queries';
import { createItem as createItemMutation, deleteItem as deleteItemMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import TitlebarImageList from './TitlebarImageList';

const initialFormState = { title: '', category: '', description: '', email: '', lat: '', lon: '', latLong: '', phone: '', price: '',textNumber: '', url: '', ownerID: '', image: '', image2: '', image3: '', image4: '', image5: ''}

function App() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [state, setState] = useState('stateVar');

    useEffect(() => {
        fetchItems();
    }, []);

    async function fetchItems() {
        try {
            //alert('fetching');
            const apiData = await API.graphql({ query: listItems });
            //const apiData = await API.graphql(graphqlOperation(listItems));
        

        //alert('fetched');
        const itemsFromAPI = apiData.data.listItems.items;
        
        
            await Promise.all(itemsFromAPI.map(async item => {
                if (item.image) {
                    const image = await Storage.get(item.image);
                    item.image = image;
                }
                if (item.image2) {
                    const image2 = await Storage.get(item.image2);
                    item.image2 = image2;
                }
                if (item.image3) {
                    const image3 = await Storage.get(item.image3);
                    item.image3 = image3;
                }
                if (item.image4) {
                    const image4 = await Storage.get(item.image4);
                    item.image4 = image4;
                }
                if (item.image5) {
                    const image5 = await Storage.get(item.image5);
                    item.image5 = image5;
                }
                return item;
            }))
            setItems(apiData.data.listItems.items);
        } catch (err) { console.log(err); }
    }
    async function createItem() {
        if (!formData.title || !formData.description) return;
        const user = await Auth.currentUserInfo();
        
        formData.ownerID = user.attributes['sub'];
        //alert(formData.title);
 
        await API.graphql({ query: createItemMutation, variables: { input: formData } });
        //alert('query executed');
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        if (formData.image2) {
            const image2 = await Storage.get(formData.image2);
            formData.image2 = image2;
        }
        if (formData.image3) {
            const image3 = await Storage.get(formData.image3);
            formData.image3 = image3;
        }
        if (formData.image4) {
            const image4 = await Storage.get(formData.image4);
            formData.image4 = image4;
        }
        if (formData.image5) {
            const image5 = await Storage.get(formData.image5);
            formData.image5 = image5;
        }
        setItems([...items, formData]);
        setFormData(initialFormState);
        //fetchItems();

    }

    async function deleteItem({ id }) {
        const newItemsArray = items.filter(item => item.id !== id);
        setItems(newItemsArray);
        await API.graphql({ query: deleteItemMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        const user = await Auth.currentUserInfo();
        formData.ownerID = user.attributes['sub'];
        var newFileName = formData.ownerID + new Date().getTime() + file.name;
        setFormData({ ...formData, image: newFileName });
        await Storage.put(newFileName, file);
        fetchItems();
    }
    async function onChange2(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        const user = await Auth.currentUserInfo();
        formData.ownerID = user.attributes['sub'];
        var newFileName = formData.ownerID + new Date().getTime() + file.name;
        setFormData({ ...formData, image2: newFileName });
        await Storage.put(newFileName, file);
        fetchItems();
    }
    async function onChange3(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        const user = await Auth.currentUserInfo();
        formData.ownerID = user.attributes['sub'];
        var newFileName = formData.ownerID + new Date().getTime() + file.name;
        setFormData({ ...formData, image3: newFileName });
        await Storage.put(newFileName, file);
        fetchItems();
    }
    async function onChange4(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        const user = await Auth.currentUserInfo();
        formData.ownerID = user.attributes['sub'];
        var newFileName = formData.ownerID + new Date().getTime() + file.name;
        setFormData({ ...formData, image4: newFileName});
        await Storage.put(newFileName, file);
        fetchItems();
    }

    async function onChange5(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        const user = await Auth.currentUserInfo();
        formData.ownerID = user.attributes['sub'];
        var newFileName = formData.ownerID + new Date().getTime() + file.name;
        setFormData({ ...formData, image5: newFileName });
        await Storage.put(newFileName, file);
        fetchItems();
    }

    async function homeClick()
    {
        
        setState('home');
    }

    async function searchClick() {
        
        setState('search');
    }
    async function newClick() {
        
        setState('new');
    }

    function myListItem(item)
    {
        return 
        (
            <div>
                <button className="myItem" onClick={function () { alert(item.title); }}>
                    {this.props.value}
                </button>
            </div>
        )
    };
   

    function NewItem() {
        return (
            <div>
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
            <div>
                <input
                    type="file"
                    onChange={onChange2}
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={onChange3}
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={onChange4}
                />
            </div>
            <div>
                <input
                    type="file"
                    onChange={onChange5}
                />
            </div>
                <button onClick={createItem}>Create Item</button>
                </div>
            )
    };

    function ShowItems() {
        return (
            
            <div style={{ marginBottom: 30 }}>

                    <ItemList items={items} />
 
            </div>)

    }
    return (
        
        <div className="App">
            <h1>Kwik-Links</h1>
            <div id="mainControls">
                <button onClick={() => homeClick()}>Home</button>
                <button onClick={() => searchClick()}>Search</button>
                <button onClick={() => newClick()}>New</button>
            
            </div>
            
            { state === 'new' ? <NewItem /> : null}
            
            { state === 'search' ? <ShowItems /> : null}


            <AmplifySignOut />

        </div>
    );
}

function ListItem(props)
{
    function setState(value) {
        const state = value;
        alert(value);
    }
    return (
        <div>
            <img src={props.image} alt={props.title} height="100px" width="100px" />
            {props.title}
            {props.price}
            &nbsp;&nbsp;&nbsp; <a href='tel:{props.phone}'>Call Now</a>
            &nbsp;&nbsp;<a href='sms:{props.textNumber}'>Text Now</a>
            &nbsp;&nbsp;<a href='mailto:{props.email}'>Email Now</a>
            &nbsp;&nbsp;<a href='{props.url}'>More Info</a>
            &nbsp;&nbsp;
            <button
                className="square"
                onClick={() => setState({ value: 'X' })}
            >
                View Details
            </button>
        </div>
    );
}
function ItemList(props) {
    const myItems = props.items;
    const myListItems = myItems.map((item) =>
        <ListItem key={item.id} title={item.title} image={item.image} price={item.price}/>
        
    );

        return (
            <div>{myListItems}</div>
        );

}
export default withAuthenticator(App);
