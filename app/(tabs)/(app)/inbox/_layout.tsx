import React from 'react';
import {Stack} from 'expo-router';

const Layout = () =>{
    return <Stack
    screenOptions={{
        title: '',
        headerShown: false,
    }}
    />;
};

export default Layout;