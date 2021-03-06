import React, {PureComponent} from 'react';
import './RegistryUser.scss';
import {
    TextField,
    Button,
    FormLabel
} from '@material-ui/core';

export default class RegistryUser extends PureComponent {
    state = {
        name: '',
        error: false
    };

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    _handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    _submit = () => {
        this.props.addUser(this.state.name)
            .then(() => {
                alert(`${this.state.name} 님 등록되셨습니다.`);
                this.setState({name: '', error: false});
                // this.props.history.push('/');
            })
            .catch(e => this.setState({error: true}));
    };

    render() {
        return (
            <section className="game-history">
                <p className={'warning'}>
                    <span>[주의]</span><br/>
                    <span>닉네임은 한번 정하면 원칙적으로 변경이 불가능 합니다.</span><br/>
                    <span>또한 1인 1아이디 원칙이며 재생성이 불가능 합니다.</span><br/>
                    <span>충분히 생각해 보시고 입력하시기 바랍니다.</span><br/>
                </p>
                <TextField autoFocus
                           label='아이디'
                           value={this.state.name}
                           onChange={this._handleChange('name')}
                           error={this.state.error}
                />
                <br/>
                {
                    this.state.error &&
                    <FormLabel error={this.state.error}>등록된 아이디입니다.</FormLabel>
                }
                <br/>
                <Button className={'submit-btn'}
                        variant="contained"
                        color="primary"
                        onClick={this._submit}
                >
                    등록하기
                </Button>
            </section>

        );
    }
}

