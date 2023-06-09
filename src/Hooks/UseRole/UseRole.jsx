import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseRole = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isRole, isLoading: isRoleLoading } = useQuery({
        queryKey: ['isRole', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data.role;
        }
    })
    return [isRole, isRoleLoading]
};

export default UseRole;