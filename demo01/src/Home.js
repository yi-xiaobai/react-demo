import { Component } from 'react'


class Home extends Component {

    constructor(props) {
        super(props)
        console.log('初始化');
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        console.log('==>Get 组件将要挂载');
    }

    componentDidUpdate(){
        console.log('==>Get componentDidUpdate ddd');
    }


    getSnapshotBeforeUpdate(){
        console.log('==>Get getSnapshotBeforeUpdate ddd');
        return null
    }


    shouldComponentUpdate() {
        console.log('==>Get shouldComponentUpdate');
        return true
    }



    handleValueChange = (e) => {
        console.log('==>Get e', e);
        this.setState({
            value: e.target.value
        })
    }


    render() {
        console.log('==>Get render');
        return (
            <div>
                <h2>Home组件</h2>
                <div>{this.state.value}</div>
                <input onChange={this.handleValueChange} />
            </div>
        )
    }

}
export default Home