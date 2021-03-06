import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../../../commonComponents/Tooltip/Tooltip';
import createForm from '../../../../customRedux/createForm';
import createField from '../../../../customRedux/createField';
import InputFormField from '../../../../commonComponents/InputFormField';
import generateNewPasswordFormValidator from './generateNewPasswordFormValidator';
import { createWalletMessage } from '../../../../messages/keyStoreActionMessages';

import formStyle from '../../../../commonComponents/forms.scss';

const FORM_NAME = 'generateNewPasswordForm';

class GenerateNewPasswordForm extends Component {
  componentWillMount() {
    this.props.formData.setNumOfFields(2);
    this.PasswordField = createField(InputFormField, this.props.formData);
    this.RepeatPasswordField = createField(InputFormField, this.props.formData);
  }

  render() {
    const PasswordField = this.PasswordField;
    const RepeatPasswordField = this.RepeatPasswordField;

    return (
      <form
        styleName="form-wrapper-2"
        onSubmit={(e) => { this.props.handleSubmit(e, createWalletMessage); }}
      >

        <PasswordField
          name="password"
          showErrorText
          type="password"
          showLabel
          labelText="Passphrase:"
          wrapperClassName={formStyle['form-item-wrapper']}
          inputClassName={formStyle['form-item']}
          errorClassName={formStyle['form-item-error']}
          autoFocus
        />

        <RepeatPasswordField
          name="repeatPassword"
          showErrorText
          type="password"
          showLabel
          labelText="Repeat passphrase:"
          wrapperClassName={formStyle['form-item-wrapper']}
          inputClassName={formStyle['form-item']}
          errorClassName={formStyle['form-item-error']}
        />


        <button
          className={formStyle['submit-button']}
          type="submit"
          disabled={
            this.props.pristine || this.props.invalid
          }
        >
          <Tooltip
            content={(
              <div>
                { this.props.pristine && 'Fill out missing form fields' }
                { !this.props.pristine && this.props.invalid && 'Form is incomplete or has errors' }
              </div>
            )}
            useHover={this.props.pristine || this.props.invalid}
            useDefaultStyles
          >
            Submit
          </Tooltip>
        </button>
      </form>
    );
  }
}

GenerateNewPasswordForm.propTypes = {
  formData: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default createForm(
  FORM_NAME, GenerateNewPasswordForm, generateNewPasswordFormValidator
);
