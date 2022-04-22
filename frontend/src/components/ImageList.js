/*
 * @Author: 李佳修
 * @Date: 2022-04-21 20:21:20
 * @LastEditTime: 2022-04-21 21:44:53
 * @LastEditors: 李佳修
 * @FilePath: /bhpmJS/frontend/src/components/ImageList.js
 */
import { Box, Card } from "@mui/material";
const ImageList = (props) => {
    const { images, itemId } = props;

    let renderList = [];

    const index = images.findIndex((ele) => ele.id === itemId);

    if (index !== -1) {
        if (index - 1 < 0){
            renderList = images.slice(0, 4);
        } else if (index + 2 > images.length - 1) {
            renderList = images.slice(images.length - 4);
        } else {
            renderList = images.slice(index - 1, index + 3);
        }
    }
    console.log(renderList)
    const renderListUrls = renderList.map((item) => ({
        url: item.auctionItem?.imgUrls[0] || '',
        itemId: item.id,
        name: item.auctionItem.name
    }));

    const selectedIndex = renderListUrls.findIndex((ele) => ele.itemId === itemId);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between' 
        }}>
            {
                renderListUrls.map((item, index) => (
                    <Card
                        key={item.itemId}
                        sx={{
                            p: '2px',
                            width: '100%',
                            height: '107px',
                            display: 'flex',
                            alignItems: 'center',
                            border: selectedIndex === index ? '3px solid rgb(70, 120, 178)' : ''
                        }}
                        title={item.name}
                    >
                        <img
                            alt={item.url}
                            style={{ width: '100%', height: '100%' }} 
                            src={item.url}/>
                    </Card>
                   
                ))
            }
        </Box>
    )
}

export default ImageList;