import React, { Component } from 'react';

import {
  Baseline,
  Box,
  Grid,
  Title,
  SubTitle,
  Button,
  Paragraph,
  TextInput,
  PasswordInput,
  IntegerInput,
  FormField,
  SuccessNotification,
  ErrorNotification,
  NotificationCenter,
} from '../src';

let gid = 0;

class App extends Component {
  state = {
    value: 'wdawd',
    intValue: '0',
    notifications: [],
  }

  onRemove = id => this.setState({
    notifications: this.state.notifications.filter(n => n.id !== id),
  });

  onAdd = () => {
    this.setState({
      notifications: [...this.state.notifications, {
        id: gid,
        type: 'error',
        message: 'nenenenenwnwnw',
      }],
    });
    gid += 1;
  }

  onInput = (value) => {
    this.setState({ value });
  }

  onIntegerInput = (intValue) => {
    this.setState({ intValue });
  }

  onClick = () => 'Clicked!';

  render() {
    return (
      <Baseline>
        <Box>
          <Title text="Hello, World" />
          <SubTitle text="Hello, World" />
          <Grid>
            <Button className="wdawd" text="LOLOL" onClick={this.onClick} />
            <Button text="LOLOL" disabled onClick={this.onClick} />
            <Button text="LOLOL" onClick={this.onClick} />
          </Grid>
          <Paragraph>Basic Text Example</Paragraph>
          <Grid>
            <TextInput
              id="0"
              onInput={this.onInput}
              onChange={() => 'CHANGE'}
              onEnter={() => 'SUBMIT'}
              value={this.state.value}
            />
            <TextInput id="1" placeholder={'lolol'} onInput={this.onInput} value={this.state.value} required />
            <TextInput id="2"readOnly onInput={this.onInput} value={this.state.value} />
            <TextInput id="3" onInput={this.onInput} value={this.state.value} />
            <PasswordInput id="4" onInput={this.onInput} value={this.state.value} />
            <IntegerInput id="5" onInput={this.onIntegerInput} value={this.state.intValue} max={5} />
          </Grid>
          <FormField name="Label">
            <TextInput id="wadaw" onInput={this.onInput} value={this.state.value} />
          </FormField>
        </Box>
        <SuccessNotification>
          wadawdwda uwdhawui dhuawi dauwid awuid awd hawuidh awiud awuid auwid
        </SuccessNotification>
        <ErrorNotification>
          wadawdwda uwdhawui dhuawi dauwid awuid awd hawuidh awiud awuid auwid
        </ErrorNotification>
        <Button text="Add" onClick={this.onAdd} />
        <NotificationCenter
          notifications={this.state.notifications}
          onRemove={this.onRemove}
        />
      </Baseline>
    );
  }
}

export default App;
