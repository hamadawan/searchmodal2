import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Paper from '@material-ui/core/Paper'
import { Button, Checkbox, Grid, makeStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { AddToQueueSharp } from '@material-ui/icons';

const response = JSON.parse(
    JSON.stringify(
        {
            "content":[
            {
                "itecEmpId":163,
                "firstName":"priya",
                "adressId":{
                    "addressId":488,
                    "addressLine1":"koramangala16",
                    "addressLine2":"koramangala2",
                    "city":"bangalore",
                    "stateId":{
                        "id":1,
                        "stateName":"Andaman and Nicobar Islands",
                        "country":"India",
                        "dateCreated":"2020-09-28"
                    },
                    "pinCode":"560102",
                    "isActive":"1",
                    "country":"INDIA",
                    "addressType":null
                },
                "isActive":true,
                "pan":"pan7474h",
                "aadharNumber":"asjh12",
                "userId":228,
                "dateCreated":"2020-11-04",
                "dateModified":"2020-11-04",
                "usertypeId":2,
                "lastName":"jain",
                "officeEmail":"jain.priyan118@gmail.com",
                "mobileNumber":"+917860734754",
                "fathersName":"jain",
                "gender":"Female",
                "dateOfBirth":"2020-09-08",
                "personalEmail":"jain.priyan11@gmail.com",
                "doj":"2020-09-08",
                "confirmationDate":"2020-09-08",
                "branch":"chennai",
                "designation":{
                    "roleId":9,
                    "roleText":"ITeCTeam-Others",
                    "roleCategory":"Itec Team"
                },
                "emergencyNumber":"7462672799",
                "approverForTimesheet":"shwetha"
            },
            {
                "itecEmpId":167,
                "firstName":"Farhan",
                "adressId":{
                    "addressId":488,
                    "addressLine1":"koramangala16",
                    "addressLine2":"koramangala2",
                    "city":"bangalore",
                    "stateId":{
                        "id":1,
                        "stateName":"Andaman and Nicobar Islands",
                        "country":"India",
                        "dateCreated":"2020-09-28"
                    },
                    "pinCode":"560102",
                    "isActive":"1",
                    "country":"INDIA",
                    "addressType":null
                },
                "isActive":true,
                "pan":"pan7474h",
                "aadharNumber":"asjh12",
                "userId":228,
                "dateCreated":"2020-11-04",
                "dateModified":"2020-11-04",
                "usertypeId":2,
                "lastName":"jain",
                "officeEmail":"jain.priyan118@gmail.com",
                "mobileNumber":"+917860734754",
                "fathersName":"jain",
                "gender":"Female",
                "dateOfBirth":"2020-09-08",
                "personalEmail":"jain.priyan11@gmail.com",
                "doj":"2020-09-08",
                "confirmationDate":"2020-09-08",
                "branch":"chennai",
                "designation":{
                    "roleId":9,
                    "roleText":"ITeCTeam-Others",
                    "roleCategory":"Itec Team"
                },
                "emergencyNumber":"7462672799",
                "approverForTimesheet":"shwetha"
            },
            {
                "itecEmpId":166,
                "firstName":"ITechothers",
                "adressId":{
                    "addressId":498,
                    "addressLine1":"Krishna nagar",
                    "addressLine2":"Mogappair",
                    "city":"Chennai",
                    "stateId":{
                        "id":10,
                        "stateName":"Delhi",
                        "country":"India",
                        "dateCreated":"2020-09-28"
                    },
                    "pinCode":"600050",
                    "isActive":"1",
                    "country":"india",
                    "addressType":null
                },
                "isActive":true,
                "pan":"AABAG7225P",
                "aadharNumber":"123567896547",
                "userId":231,
                "dateCreated":"2020-12-14",
                "dateModified":"2020-12-14",
                "usertypeId":2,
                "lastName":"others",
                "officeEmail":"itecteam.others@gmail.com",
                "mobileNumber":"+916302606529",
                "fathersName":"Giri",
                "gender":"male",
                "dateOfBirth":"1987-06-11",
                "personalEmail":"itecteam.others@gmail.com",
                "doj":"2020-12-14",
                "confirmationDate":"2020-12-14",
                "branch":"Hyderabad09",
                "designation":{
                    "roleId":9,
                    "roleText":"ITeCTeam-Others",
                    "roleCategory":"Itec Team"
                },
                "emergencyNumber":"+916302606529",
                "approverForTimesheet":"a"
            }
            ],
            "pageable":{
            "sort":{
                "sorted":false,
                "unsorted":true,
                "empty":true
            },
            "offset":0,
            "pageNumber":0,
            "pageSize":20,
            "paged":true,
            "unpaged":false
            },
            "totalPages":1,
            "totalElements":2,
            "last":true,
            "size":20,
            "number":0,
            "numberOfElements":2,
            "sort":{
            "sorted":false,
            "unsorted":true,
            "empty":true
            },
            "first":true,
            "empty":false
        }
    )
)

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '250px',
    padding:'0 10px'
  },
  iconButton: {
    padding: 10,
  },
}));

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border: '1px gray solid',
    width:'55%',
    padding:'0px'
  },
};
 
Modal.setAppElement('#root')

function MyModal(props){

    const [data, setData] = useState(response.content)
    const [select, setSelect] = useState([])

    const addUser = (user,event) => {
        if(event.target.checked)
        {
            user.selected = true;
            setSelect([...select, user])
        }
        else
        {
            const arr = select.filter((u)=>{
                if(u.itecEmpId!=user.itecEmpId) return u 
                else u.selected = false
            })

            setSelect(arr)
        }
    }
    const search = (event) => {
        if(event.target.value=='')
        {
            setData(response.content)
        }
        else 
        {
            let re = new RegExp(event.target.value+'.+$', 'i');
            let result = data.filter(function(e){
                return e.firstName.search(re) != -1;
            });
            setData(result)
        }
    }

    const submit = () =>{
        console.log(select)
    }
    const classes = useStyles();
    
    return (
      <div>
        <Modal
          isOpen={props.isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{width:'100%', height:'400px'}}>
              <Paper style={{width:'100%', height:'100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                
                <h3 style={{alignSelf:'flex-end', marginRight:'30px',}} onClick={()=>{ setSelect([]); setData(response.content); props.setIsOpen(false)}}>x</h3>
                <h3 style={{ marginTop:'-35px'}}>Assign Member to the service</h3>
                <h5 style={{color:'#999999', marginTop:'-5px'}}>Select member to the service</h5>
                
                <Paper style={{marginBottom:'5px'}}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search member to asign.."
                        inputProps={{ 'aria-label': 'search member to asign' }}
                        onChange={(event)=> search(event)}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Grid container>
                    {
                        data.map((user)=>{
                            return <Grid item xs={3} sm={3} md={3}>
                                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                            <Checkbox checked={user.selected? true: false} onChange={ (event) => addUser(user, event) } color="primary"/>
                                            <h5> {user.firstName} </h5>
                                        </div>
                                    </Grid> 
                        })     
                    }
                </Grid>
                <Button variant="contained" color="primary" onClick={submit} style={{ width:'120px',height:'40px'}}>Add</Button>
              </Paper>
          </div>
        </Modal>
      </div>
    );
}

export default MyModal