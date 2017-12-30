import * as React from 'react';
import Margins from '../../components/UI/Margins/Margins';
import * as  styles from './Contact.css';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

export interface OwnProps {}

interface Profile {
  icon: string;
  link: string;
}

export interface OwnState {
  name: string;
  email: string;
  message: string;
  profiles: Profile[];
}

export class Contact extends React.Component<OwnProps, OwnState> {
  
  public state = {
    name: '',
    email: '',
    message: '',
    profiles: [{
        icon: 'fab fa-facebook-square', 
        link: ('https://www.facebook.com/profile.php?id=695076151'),
      }, {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/robert-jackson-02599aa9/',
      }, {
        icon: 'fab fa-github-square',
        link: 'https://github.com/dwraithrah',
      }
    ]
  };

  onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({name: event.currentTarget.value});
  }

  onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({email: event.currentTarget.value});
  }

  onBodyChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({message: event.currentTarget.value});
  }

  render() {
    const { name, email, message, profiles } = this.state;
    const { contact, textField, header } = styles;
    return (
      <Margins>  
        <form noValidate={true} className={contact} autoComplete="off">
          <Grid container={true} alignItems="center" justify="center">
            <Grid item={true} xs={12}>
            <Typography align="center" type="subheading" className={header}>
              Hey there, thanks for stopping by, if you have any questions or interest in my work,
              please fill out this form, contact me or check out my social media links!
            </Typography>
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                required={true}
                id="name"
                label="Name"
                onChange={this.onNameChange}
                value={name}
                margin="dense"
                placeholder="type name here"
                className={textField}
                type="text"
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                required={true}
                id="email"
                label="Email"
                onChange={this.onEmailChange}
                value={email}
                margin="dense"
                placeholder="type email here"
                className={textField}
                type="email"
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                id="multiline-flexible"
                required={true}
                label="Body"
                onChange={this.onBodyChange}
                value={message}
                margin="dense"
                rows="5"
                multiline={true}
                placeholder="type your message here"
                className={textField}
                type="text"
              />
            </Grid>
          </Grid>
        </form>
        <div className={styles.profiles}>
          <ul className="fa-3x">
            {profiles.map(profile => (
              <li key={profile.icon}>
                <a href={profile.link}>
                  <i className={profile.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Margins>
    );
  }
}

export default Contact;
