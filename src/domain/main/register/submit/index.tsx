import React from 'react';
import successLink from "Assets/images/successLink.svg";
import "Assets/css/pages/main/submitAccount.css"

const Submit = () => {
    return(
        <section className="submit-account center-content">
            <div className="card submit-account--card custom--card text-center">
                <div className="card__header-title">
                    <img src={successLink} alt="successLink"/>
                    <br/>
                    <h4 className=" text-center">شما با موفقیت ثبت نام کردید</h4>
                </div>
                <p> برای فعال سازی حساب کاربری خود روی لینک ارسال شده به ایمیل شما کلیک کنید.</p>
            </div>
        </section>
    );
};

export default Submit;