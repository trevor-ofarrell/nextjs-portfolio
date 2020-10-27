import React, { useState } from 'react';

import {

    createStyles,

    Theme,

    makeStyles,

    Drawer,

    CssBaseline,

    Typography,

    Button,

    Box,

} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import TreeView from '@material-ui/lab/TreeView';

import TreeItem from '@material-ui/lab/TreeItem';

import Head from 'next/head';

import { DashBoard } from './Dashboard';

import { SiteDetails } from './SiteDetails';

import { PublicContact } from './PublicContact';

import { DirectContactDetails } from './DirectContactDetails';

import { StockStatus } from './StockStatus';

import { LoginDetails } from './LoginDetails';

const drawerWidth = '22vw';

interface RenderTreeChild {

    id: string;

    name: string;

    flag: number;

    children?: RenderTreeChild[];

}

interface RenderTreeParent {

    id: string;

    name: string;

    flag: number;

    children?: RenderTreeChild[];

}

  

const useStyles = makeStyles((theme: Theme) =>

  createStyles({

    root: {

      display: 'flex',

      backgroundColor: 'white',

    },

    treeRoot: {

        height: 516,

        flexGrow: 1,

        paddingLeft: '1em',

    },

    appBar: {

      width: `calc(100% - ${drawerWidth}px)`,

      marginLeft: drawerWidth,

    },

    drawer: {

      width: drawerWidth,

      flexShrink: 0,

    },

    drawerPaper: {

      width: drawerWidth,

      backgroundColor: "#f1f3f4",

      height: 'calc(100% - 8vh)',

      top: '8vh',

    },

    // necessary for content to be below app bar

    toolbar: theme.mixins.toolbar,

    toolbarText: {

        padding: '1.6em',

        marginTop: ".5em",

        fontSize: "16px",

        letterSpacing: '0.8px',

        color: "#262626",

        fontWeight: 600,

        textAlign: 'center',

        fontFamily: 'Red Hat Display',

        width: '100%',

    },

    content: {

      flexGrow: 1,

      backgroundColor: 'white',

      padding: theme.spacing(6),

      margin: 0,

      width: "100%",

      height: '87vh',

      overflowY:'auto',

    },

    treeitem: {

        width: '100%',

    },

    treeNode: {

        padding: '.8em',

        fontSize: "16px",

        letterSpacing: '0.8px',

        color: "#262626",

        fontWeight: 600,

        textAlign: 'left',

        fontFamily: 'Red Hat Display',

        width: '100%',

    },

    disable: { 

        pointerEvents: 'none',

        cursor: 'default',

    },

    treeButton: {

        width: '100%',

        borderRadius: 0,

    },

  }),

);

export const Edit = ({

    header = "",

  }: {

    header?: string;

  }) => {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string[]>([]);

  const [selected, setSelected] = React.useState<string[]>([]);

  const [showEdit, toggleShowEdit] = useState(0);

  const [pageHeader, toggleHeader] = useState("");

  const handleToggle = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {

    setExpanded(nodeIds);

  };

  const handleSelect = (event: React.ChangeEvent<{}>, nodeIds: string[]) => {

    setSelected(nodeIds);

  };

  const data: Array<RenderTreeParent> = [

    {

        id: 'root',

        name: 'EL PASO SCHOOL DISTRICT',

        flag: showEdit,

        children: [

        {

            id: '1',

            name: 'SITE DETAILS & STATUS',

            flag: 0,

        },

        {

            id: '2',

            name: 'PUBLIC CONTACT DETAILS',

            flag: 1,

        },

        {

            id: '3',

            name: 'DIRECT CONTACT DETAILS',

            flag: 2,

        },

        {

            id: '4',

            name: 'STOCK STATUS & REMINDER',

            flag: 3,

        },

        {

            id: '5',

            name: 'LOGIN DETAILS',

            flag: 4,

        },

        {

            id: '6',

            name: 'EXTERNAL INFO',

            flag: 5,

        },

        ],

    },

    {

        id: 'root2',

        name: 'Alameda School District',

        flag: showEdit,

        children: [

            {

                id: '7',

                name: 'SITE DETAILS & STATUS',

                flag: 0,

            },

            {

                id: '8',

                name: 'PUBLIC CONTACT DETAILS',

                flag: 1,

    

            },

            {

                id: '9',

                name: 'DIRECT CONTACT DETAILS',

                flag: 2,

    

            },

            {

                id: '10',

                name: 'STOCK STATUS & REMINDER',

                flag: 3,

    

            },

            {

                id: '11',

                name: 'LOGIN DETAILS',

                flag: 4,

    

            },

            {

                id: '6',

                name: 'EXTERNAL INFO',

                flag: 5,

    

            },

        ],

    },

  ];

  const renderTree = (nodes: any) => (

    <TreeItem

        key={nodes.id}

        nodeId={nodes.id}

        label={

            <Button onClick={() => { toggleShowEdit(nodes.flag); toggleHeader(nodes.parentName);}} className={classes.treeButton}>

                <Typography variant='h6' className={classes.treeNode} >

                    {nodes.name}

                </Typography>

            </Button>

        }

    >

      {Array.isArray(nodes.children) ? nodes.children.map((node: any) => renderTree(node)) : null}

    </TreeItem>

  );

  return (

    <div className={classes.root}>

      <Head>

        <link href="https://fonts.googleapis.com/css?family=Red Hat Display" rel="stylesheet" />

      </Head>

      <CssBaseline />

      <Drawer

        className={classes.drawer}

        variant="permanent"

        classes={{

          paper: classes.drawerPaper,

        }}

        anchor="left"

      >

        <div className={classes.toolbar}>

            <Typography variant='h6' className={classes.toolbarText}>

                ORGANIZATION DETAILS

            </Typography>

        </div>

        <TreeView

            className={classes.treeRoot}

            defaultCollapseIcon={<ExpandMoreIcon style={{ fontSize: '2em' }}/>}

            defaultExpandIcon={<ChevronRightIcon style={{ fontSize: '2em' }}/>}

            expanded={expanded}

            onNodeToggle={handleToggle}

            onNodeSelect={handleSelect}

        >

        {data.map((parent, index) => (

              renderTree(parent)

        ))}

        </TreeView>

      </Drawer>

        <Box className={classes.content}>

            <>

            {showEdit == 0 &&

                <SiteDetails header={pageHeader}/>

            }

            {showEdit == 1 &&

                <PublicContact/>

            }

            {showEdit == 2 &&

                <DirectContactDetails/>

            }

            {showEdit == 3 &&

                <StockStatus/>

            }

            {showEdit == 4&&

                <LoginDetails/>

            }

            </>

        </Box>

    </div>

  );

}




const data = [
    {
        id: 'root',
        name: 'EL PASO SCHOOL DISTRICT',
        flag: showEdit,
        children: [
        {
            id: '1',
          name: 'SITE DETAILS & STATUS',
          flag: 0,
        },
        {
            id: '2',
            name: 'PUBLIC CONTACT DETAILS',
            flag: 1,
        }
        {
            id: '3',
            name: 'DIRECT CONTACT DETAILS',
            flag: 2,
        },
        {
            id: '4',
            name: 'STOCK STATUS & REMINDER',
            flag: 3,
        },
        ],

    },
  ];

  const renderTree = (nodes) => (
    <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={
            <Button onClick={() => { toggleShowEdit(nodes.flag); toggleHeader(nodes.parentName);}} className={classes.treeButton}>
                <Typography variant='h6' className={classes.treeNode} >
                    {nodes.name}
                </Typography>
            </Button>
        }
    >
      {Array.isArray(nodes.children) ? nodes.children.map((node: any) => renderTree(node)) : null}
    </TreeItem>
  );