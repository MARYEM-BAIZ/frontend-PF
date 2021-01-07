
import './ajoutarticle.css'

import Axios from 'axios';
import {Link} from "react-router-dom";

import React , { Component } from 'react';


class Ajoutarticle extends Component{


  constructor(props){
    super(props);

    this.state ={
       titre:"",
       description:"",
       contenu:"",
       image:"",
       categorie_id:"",
       categories:[]

    }

}




 componentDidMount(){
  const url= 'http://localhost:8000/api/categories' ;
    Axios.get(url).then(response => {
     // console.log(response.data);
    this.setState({
      categories:response.data
    })
  });

}






inputhandlertitre  = (event) => {
  //console.log(event.target.value);
  this.setState({

      titre: event.target.value

     });
  
}




inputhandlerdescription  = (event) => {
  //console.log(event.target.value);
  this.setState({

      description: event.target.value

     });
  
}




inputhandlercontenu  = (event) => {
  //console.log(event.target.value);
  this.setState({

      contenu: event.target.value

     });
  
}





// inputhandlerimage  = (event) => {

//   this.setState({

//       image: event.target.value

//      });
  
// }




inputhandlercategorie_id  = (event) => {
 //console.log(event.target.options.selectedIndex);
   this.setState({

       categorie_id: event.target.options.selectedIndex

      });
  
}






ajouter  = (event) => {
  event.preventDefault();

const url = "http://localhost:8000/api/categories/" + this.state.categorie_id + "/articles";
const article  ={ 
  titre: this.state.titre,
  description: this.state.description,
  contenu: this.state.contenu,
   image: "immmage",
  categorie_id: this.state.categorie_id
};


Axios.post(url ,article)
.then(response => {
   console.log(response);


})
.catch(error=> {
console.log(error);
});

}




  render() {

    let categories= this.state.categories.map( categorie => {
      
       return ( 
      <option   key={categorie.id} value={categorie.id} >{categorie.nom}</option>
      )
    });
    return (
        <div className="Ajoutarticle">
     
     <h4 className="classclass">Ajout d'un article</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
           <form >
     <label  >titre d'article :
     <input onChange={this.inputhandlertitre} style={{width:"80%"}}   type="text" name="titre" /> 
     </label>

     <label  >description d'article :
     <input onChange={this.inputhandlerdescription} style={{width:"80%"}}   type="text" name="description" /> 
     </label>

     <label  >contenu d'article :
     <input onChange={this.inputhandlercontenu} style={{width:"80%"}}   type="text" name="contenu" /> 
     </label>

     <label  >uploader une image :
     <input  style={{width:"80%"}}   type="file" name="image" /> 
     </label>

     <select onChange={this.inputhandlercategorie_id}  name="categorie_id">
     { categories}
    </select>
    
     <input className="inputsubmitform" onClick={this.ajouter} style={{border:"none",padding:"7px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
   </form>

   </div>

        </div>
    );}
}




export default Ajoutarticle;
