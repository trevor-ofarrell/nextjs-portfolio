import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top:'0',
        left: '0',
        bottom: '0',
        width: '30vw',
        [theme.breakpoints.down('md')]: {
            width: '50vw'
        },
    },
    menuText: {
        float: 'left',
        fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
        marginTop: '-2.5px',
        paddingLeft: '1vw'
    },
    icon: {
        color: 'white',
        height: '100%'
    },
    iconPlaceholder: {
      borderRadius: '50%',
      height: '40px',
      width: 'auto',
      marginRight: '1em',
      flex: '40px 0',
    },
    textPlaceholder: {
      width: '100vw',
      borderRadius: '5px',
      height: '40px',
      flex: '1',
    }
  }));

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const titles = ["home", "about", "projects", "blog", "contact"]

export const MenuItem = ({ changeView, toggleView, i }) => {
  const classes = useStyles()
  const style = { border: `4px solid ${colors[i]}` };
  const handleToggle = useCallback(event => {
    toggleView(i)
  }, [toggleView])

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      href={`/${titles[i]}`}
      onClick={handleToggle}
    >
      <div className={classes.iconPlaceholder} style={style} >
        <GitHubIcon className={classes.icon}/>
      </div>
      <div className={classes.textPlaceholder} style={style}>
        <Typography variant="h5" color="secondary" className={classes.menuText}>
            {titles[i]}
        </Typography>      
      </div>
    </motion.li>
  );
};
