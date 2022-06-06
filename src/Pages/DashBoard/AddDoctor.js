import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const imageStorageKey ='a3306d66552e5d911f9f2228e9c94168'

    const onSubmit = async data => {
        const image = data.photo[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
           if(result.success){
               const img = result.data.url;
               const doctor = {
                   name: data.name,
                   email: data.email,
                   specialization: data.specialization,
                   img: img
               }
               fetch('http://localhost:5000/doctor',{
                   method: 'POST',
                   headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
               })
               .then(res => res.json())
               .then(inserted => {
                   if(inserted.insertedId){
                       toast.success('Doctor add successfully')
                       reset()
                   }
                   else{
                       toast.error('failed to add doctor')
                   }
               })
           }
        })
       

    };

    return (
        <div>
            <h2 className="text-3xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* for name  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}


                    </label>
                </div>

                {/* for email validation */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            },
                            pattern: {
                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                message: 'provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                    </label>
                </div>

                {/* for password validation */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialization</span>
                    </label>
                    <select {...register("specialization")} class="select select-warning w-full max-w-xs mb-2">
                        {
                            services.map((s) => <option key={s._id}>{s.name}</option>
                            )
                        }
                        
                    </select>

                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs mb-2"
                        {...register("photo", {
                            required: {
                                value: true,
                                message: 'image is required'
                            },

                        })}
                    />
                     <label className="label">
                        {errors.photo?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.photo.message}</span>}


                    </label>


                </div>

                <input type="submit" className='btn ' value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;