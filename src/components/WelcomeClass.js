import React from 'react';

// class WelcomeClass extends React.Component {
//     render () {
//         return <div>hola {this.props.nombre}</div>
//     }
// };

// export default WelcomeClass;

const WelcomeFuntion = ({nombre, curso}) => {
    const a = 1 +2;
        return <div>hola 2, {nombre} {curso}</div>
}

export default WelcomeFuntion;