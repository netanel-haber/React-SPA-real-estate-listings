import React from 'react'
import { useFormContext } from 'react-hook-form';
import { WithDivsAndLabels } from './../../withDivAndLabel';
import { formHebrew } from '../../heb';
import { validationConfig } from '../../utilities';

const { HEB_EMAIL, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME } = formHebrew;
const { HEB_TITLE = "פרטי איש קשר", HEB_DISCLAIMER="במידה ושדות אלו לא ימולאו, ייעשה שימוש בפרטים שנמסרו בעת ההרשמה." } = {};
const { emailNotRequired, name, phoneNumber } = validationConfig;

const fieldNames = ["email", "phoneNumber", "name", "lastName"];
const ContactDetails = () => {
    const { submitCount, errors, register } = useFormContext();
    return (
        <div>
            <h5>{HEB_TITLE}</h5>
            <div className="disclaimer">{HEB_DISCLAIMER}</div>
            <div className="fields">
                <WithDivsAndLabels requiredIndices={[]} texts={[HEB_EMAIL, HEB_PHONE_NUMBER, HEB_NAME, HEB_LAST_NAME]}>
                    < input name={fieldNames[0]} type="email" className="pure-input-rounded eng" autoComplete="email" ref={register(emailNotRequired)} />
                    < input name={fieldNames[1]} className="pure-input-rounded eng" ref={register(phoneNumber)} />
                    < input name={fieldNames[2]} className="pure-input-rounded" ref={register(name)} />
                    < input name={fieldNames[3]} className="pure-input-rounded" ref={register(name)} />
                </WithDivsAndLabels>
            </div>
        </div>

    )
}

export { ContactDetails, fieldNames };