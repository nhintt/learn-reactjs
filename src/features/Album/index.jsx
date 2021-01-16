import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhạc Hoa Thịnh Hành",
            thumnailUrl: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/7/3/0/8/7308f131ee47fda37e56f102e5da46a0.jpg"
        },
        {
            id: 2,
            name: "Nhạc Hoa Thịnh Hành",
            thumnailUrl: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/7/5/0/4750ad8094750600d84a7f387774a972.jpg"
        },
        {
            id: 3,
            name: "Nhạc Hoa Thịnh Hành",
            thumnailUrl: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/3/0/c/530cb335db6024eb4be418c819391905.jpg"
        },
    ]
    return (
        <div>
            <h3>Album List</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;