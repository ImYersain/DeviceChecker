import React, { FC, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
// import { showAllowed, sortDevices } from '../../redux/deviceList/deviceListActionCreater';
import { FormControl, InputLabel } from '@mui/material';
import { AppDispatch } from '../../redux/redux-store';
import { deviceListSlice } from '../../redux/deviceList/deviceListReducer';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: 'black',
    borderColor: 'black',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: 'white',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    color: 'black',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


interface PropsType {
    setSearchValue: (arg: any) => void
}


export const SearchPanel:FC<PropsType> = ({setSearchValue}) => {
    const [checked, setChecked] = useState(false);
    const [os, setOs] = useState('all');
    const [vendor, setVendor] = useState('all');
    const dispatch = useDispatch<AppDispatch>();

    const selectAllowedDevice = () => {
        dispatch(deviceListSlice.actions.showAllowed(!checked));
        setChecked((prev) => !prev);
    }

    const handleChangeOs = (event: any) => {
        const selectedOs = event.target.value;
        setOs(selectedOs);
        dispatch(deviceListSlice.actions.sortDevices({os : selectedOs, vendor}))
        
    };
    
    const handleChangeVendor = (event: any) => {
        const selectedVendors = event.target.value; 
        setVendor(selectedVendors);
        dispatch(deviceListSlice.actions.sortDevices({os, vendor: selectedVendors}))
    };
  


    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ flexGrow: 1, backgroundColor: '#edf2f6' }} position="static">
                    <Toolbar>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block', color: 'black' } }}
                        >
                            DeviceChecker
                        </Typography>
                        <Search onChange={(e: any) => setSearchValue(e.target.value)}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Brand</InputLabel>
                            <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={vendor} onChange={handleChangeVendor} autoWidth label="OS">
                            <MenuItem value='all'>All</MenuItem>
                            <MenuItem value='apple'>APPLE</MenuItem>
                            <MenuItem value='samsung'>SAMSUNG</MenuItem>
                            <MenuItem value='acer'>ACER</MenuItem>
                            <MenuItem value='lg'>LG</MenuItem>
                            <MenuItem value='xiaomi'>XIAOMI</MenuItem>
                            <MenuItem value='lenovo'>LENOVO</MenuItem>
                            <MenuItem value='motorola'>MOTOROLA</MenuItem>
                            <MenuItem value='huawei'>HUAWEI</MenuItem>
                            <MenuItem value='asus'>ASUS</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">OS</InputLabel>
                            <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={os} onChange={handleChangeOs} autoWidth label="OS">
                            <MenuItem value='all'>All</MenuItem>
                            <MenuItem value='ios'>IOS</MenuItem>
                            <MenuItem value='android'>Android</MenuItem>
                            <MenuItem value='windows'>Windows</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel style={{'color': 'black'}} control={<Checkbox onChange={selectAllowedDevice} checked={checked} />} label="Allowed" />
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                        </Box>
                    </Toolbar>
                </AppBar>

            </Box>
    )
}