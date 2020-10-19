import * as React from "react";
import { motion } from "framer-motion";
import { Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
        zIndex: '10'
    },
    menuText: {
        float: 'left',
        fontFamily: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;',
        marginTop: '-2.5px'
    }
  }));

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const classes = useStyles()
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style}>
        <Typography variant="h5" color="secondary" className={classes.menuText}>
            testing
        </Typography>      
      </div>
    </motion.li>
  );
};
