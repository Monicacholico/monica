import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term){
       const response = await axios.get("https://api.unsplash.com/search/photos", {
           params: { query: term},
           headers: {
               Authorization: 'Client-ID dcbd5da81aeb61c0aa1f87c44732dff802c0d102036dca7a0d8df29246c32928'
           }
           });
       console.log(response.data.results)
    }
    render(){
    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        )
    }
};

export default App;