import React, { Component } from 'react'
interface Props {

}
interface State {
  name: string;
  age: number;
}
export default class Class extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: "minh thu",
      age: 25,
    }
  }
  render() {
    return (
      <div>
        Class
        {
          /*
          trong class quản lí State
          */
        }
        {this.state.name}
      </div>
    )
  }
}