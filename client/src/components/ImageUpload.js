// import React, { Component } from 'react';

// class ImageUpload extends Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.fileInput = React.createRef();
//       }
//       handleSubmit(event) {
//         event.preventDefault();
//         alert(
//           `Selected file - ${
//             this.fileInput.current.files[0].name
//           }`
//         );
//       }

//       render() {
//         return (
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Upload an image:
//               <input type="file" ref={this.fileInput} />
//             </label>
//             <br />
//             <button type="submit">Submit</button>
//           </form>
//         );
//       }
// }

// export default ImageUpload