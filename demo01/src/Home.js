import { Component } from 'react'


class Home extends Component {

    constructor(props) {
        super(props)
        console.log('初始化');
    }

    componentDidMount() {
        console.log('==>Get 组件将要挂载');
    }


    shouldComponentUpdate() {
        console.log('==>Get shouldComponentUpdate');
        return true
    }

    render() {
        console.log('==>Get render');
        return (
            <div>
                <h2>Home组件</h2>
            </div>
        )
    }

}
export default Home