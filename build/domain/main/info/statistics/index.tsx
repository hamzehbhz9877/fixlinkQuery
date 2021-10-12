import {useGetQuery} from "hooks/useGetQuery";
import {statistics} from "Services/shortlink";
import {FaUsers,FaLink} from "react-icons/fa";

const Statistics = () => {

    const {data,loadingMessage}=useGetQuery<statistics>(statistics,{queryKey:"statistics",loadingMessage:"..."})

    return (
        <div className="card-list">
                    <div className="card banner">
                        <div className="card-body">
                            <div className="link-icon">
                                <FaLink/>
                            </div>
                            <div>
                                <h6 className="card-title">لینک های دائمی</h6>
                                <p className="card-text">{loadingMessage??data?.countPermanentLink}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card banner">
                        <div className="card-body">
                            <div className="link-icon">
                                <FaUsers/>
                            </div>
                            <div>
                                <h6 className="card-title">تعداد کاربر ها</h6>
                                <p className="card-text">{loadingMessage??data?.countUsers}</p>
                            </div>

                        </div>
                    </div>
                    <div className="card banner">
                        <div className="card-body">
                            <div className="link-icon">
                                <FaLink/>
                            </div>
                            <div>
                                <h6 className="card-title">لینک های موقت</h6>
                                <p className="card-text">{loadingMessage??data?.countTemporaryLink}</p>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Statistics;