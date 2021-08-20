import { makeStyles, createStyles, DialogTitle, Theme, DialogTitleProps } from '@material-ui/core';
import { AppIconButton } from '../../';
import { dialogStyles } from '../../../utils/style';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleContainer: {
      display: 'flex',
      maxWidth: `calc(100% - ${theme.spacing(4)}px)`,
    },
    title: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    xButton: dialogStyles(theme).xButton,
  })
);

/**
 * Renders Material UI Dialog Title with optional (x) button to close the dialog
 * @param {function} [onClose] - when set the (x) button aded to Dialog Title and event called on button click
 */
interface Props extends DialogTitleProps {
  onClose?: (event: {}) => void;
}
const AppDialogTitle: React.FC<Props> = ({ children, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <DialogTitle {...props}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>{children}</span>
      </div>
      {Boolean(onClose) ? (
        <AppIconButton className={classes.xButton} icon="close" aria-label="close" title="Close" onClick={onClose} />
      ) : null}
    </DialogTitle>
  );
};

export default AppDialogTitle;
