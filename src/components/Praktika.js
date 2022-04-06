import React, { useState, useEffect } from 'react'

function Praktika() {
const [resourceType, setResourceType] = useState('posts')
const [items, setItems] = useState([])
useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/${resourceType}`) 
.then(response => response.json())
.then(json => setItems(json))
},[resourceType]) 
return (
<div>
<button onClick={() => setResourceType('posts')}> Posts </button>
<button onClick={() => setResourceType('comments')}> Comments </button>
<button onClick={() => setResourceType('albums')}> Albums </button>
<button onClick={() => setResourceType('photos')}> Photos </button>
<button onClick={() => setResourceType('todos')}> Todos </button>
<button onClick={() => setResourceType('users')}> Users </button>

<h5>{resourceType}</h5>
{items.map(item => {
return <p>{JSON.stringify(item)}</p>
})}
 </div>
 )
}

export default Praktika;