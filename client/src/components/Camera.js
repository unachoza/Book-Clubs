import React, { Component } from 'react';
import Camera from 'react-camera';
import { Redirect } from 'react-router-dom'


export default class App extends Component {
  state = {
    picture: null,
    fireRedirect:false
   }

   componentDidUpdate(prevProps, prevState) {
    if(prevState.picture !== this.state.picture) {
      console.log(this.state.picture)
    }
   }

   componentWillUpdate(nextProps, nextState){
     localStorage.setItem('url', JSON.stringify(nextState.picture))
   }


  async takePicture() {
    let theBlob;
    this.camera.capture()
    .then(blob => {
      console.log(blob)
      theBlob = blob;
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
    console.log(this.img)
    await this.setState({
      // picture: this.img.src.toString().slice(5),
      picture: theBlob
    })
}


  uploadHandler(e){
    e.stopPropagation()
    const user_id = localStorage.getItem('user_id')
    const image = document.querySelector('.captureImage')
    const blob = image.src
    console.log(this.state)
    this.setState((
      this.state = {
        picture: blob,
        fireRedirect: true
      }
    ))
    //localStorage.setItem(blob)
    //   axios.post('/pictures', {
    //     user_id: user_id,
    //     img_url: blob
    // })
    // window.location.replace('/newsfeed')
  }


// <button onClick ={() => this.uploadHandler()}> SEND TO PSQL </button>

  render() {
    return (
      <div className ='container'>
        <Camera
          style={style.preview}
          className ='preview'
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        </Camera>
        <div className='buttonsContainer'>
            <div className ='captureContainer' onClick={() => this.takePicture()}>
              <button className ='captureButton'> CAPTURE </button>
            </div>
            <div className ='uploadButton' onClick ={(e) => this.uploadHandler(e)}>
              <button className ='captureButton'> UPLOAD </button>
            </div>
            {this.state.fireRedirect ? <Redirect push to={`/user/${14}`}/> : ''}
         </div>
         <img
          className ='captureImage'
          ref={(img) => {this.img = img;}}
        />
      </div>
    );
  }
}







  // constructor(props) {
  //   super(props);
  //   this.takePicture = this.takePicture.bind(this);
  // }

  // takePicture() {
  //   this.camera.capture()
  //   .then(blob => {
  //     this.img.src = URL.createObjectURL(blob);
  //     this.img.onload = () => { URL.revokeObjectURL(this.src); }
  //   })
  // }

  // render() {
  //   return (
  //     <div style={style.container}>
  //       <Camera
  //         style={style.preview}
  //         ref={(cam) => {
  //           this.camera = cam;
  //         }}
  //       >
  //         <div style={style.captureContainer} onClick={this.takePicture}>
  //           <div style={style.captureButton} />
  //         </div>
  //       </Camera>
  //       <img
  //         style={style.captureImage}
  //         ref={(img) => {
  //           this.img = img;
  //         }}
  //       />
  //     </div>
  //   );
  // }


const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '50%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '50%',
  }
};