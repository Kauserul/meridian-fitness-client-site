import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewDetails from './MyReviewDetails';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const MyReview = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext)
    const [myReview, setReview] = useState([])
    // console.log(myReview)
    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
            headers : {
                authorization : `Bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted')
                }
                const remaining = myReview.filter(review => review._id !== id)
                setReview(remaining)

            })
    }

    // const handleUpdate = id =>{
    //     fetch(`http://localhost:5000/review/${id}`, {
    //         method : "PATCH",
    //         headers : {
    //             'content-type' : "application/json"
    //         },
    //         body : JSON.stringify(id)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }
   
    return (
        <div className='container mb-4'>
            
          
            {
                myReview.length < 1 ?
                    <h3 className='text-center mt-5 mb-5'>No reviews were added</h3>
                    :
                    <>
                    <h2>Total Review : {myReview.length}</h2>
                        {
                            myReview.map(review => <MyReviewDetails
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        // handleUpdate={handleUpdate}
                    >
                    </MyReviewDetails>)
                }
                    </>
            }
        </div >
    );
};

export default MyReview;