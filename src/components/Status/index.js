import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EllipsisOutlined } from '@ant-design/icons'
import { Button, Popover } from 'antd';

import './Status.scss';

const Status = ({ online, username }) => (
  // <div className="chat__dialog-header">
  //   <div className="chat__dialog-header-center">
  //     <b className="chat__dialog-header-username">{username}</b>
  //     <div className="chat__dialog-header-status">
        <span className={classNames('status', { 'status--online': online })}>
          {online ? 'online' : 'ofline'}
        </span>
      /* </div>
    </div>
    <Popover
      className="chat__dialog-header-action"
      content={
        <div>
          <Button>Удалить диалог</Button>
        </div>
      }
      trigger="click">
      <div>
        <Button type="link" shape="circle">
          <EllipsisOutlined style={{ fontSize: '22px' }} />
        </Button>
      </div>
    </Popover>
  </div> */
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
