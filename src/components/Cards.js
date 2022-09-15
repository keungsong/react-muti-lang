import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function ImgMediaCard(props) {
  const { t, i18n } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="315"
        image={props.items.coverimage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap="true">
        {props.items.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p" noWrap="true">
        {props.items.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{t('Share')}</Button>
        <Button size="small">{t('Learn More')}</Button>
      </CardActions>
    </Card>
  );
}
