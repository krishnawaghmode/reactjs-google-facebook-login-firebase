import React from 'react';
import 'antd/dist/antd.css';
import './input.css';

export default function Input() {
  return (
    <>
      <div className="create_a_content">
        <div className="create_a_item create_a_item_focus false false">
          <input
            maxlength="30"
            className="ant-input create_input"
            placeholder="Username"
            type="text"
            value=""
          />
        </div>
        <div className="create_a_item create_category">
          <label>Category</label>
          <div className="ant-select ant-select-borderless create_select ant-select-single ant-select-show-arrow">
            <div className="ant-select-selector">
              <span className="ant-select-selection-search">
                <input
                  autocomplete="off"
                  type="search"
                  className="ant-select-selection-search-input"
                  role="combobox"
                  aria-haspopup="listbox"
                  aria-owns="rc_select_0_list"
                  aria-autocomplete="list"
                  aria-controls="rc_select_0_list"
                  aria-activedescendant="rc_select_0_list_0"
                  readonly=""
                  unselectable="on"
                  value=""
                  id="rc_select_0"
                  style={{ opacity: '0' }}
                />
              </span>
              <span className="ant-select-selection-item" title=""></span>
            </div>
            <span
              className="ant-select-arrow"
              unselectable="on"
              aria-hidden="true"
              style={{ userSelect: 'none' }}
            >
              <span
                role="img"
                aria-label="down"
                className="anticon anticon-down ant-select-suffix"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="down"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
              </span>
            </span>
          </div>
        </div>
        <div className="create_a_item" style={{ marginBottom: '27px' }}>
          <label>Photo</label>
          <div>
            <input className="hide" type="file" accept="image/*" />
            <button className="create_upload_photo" v-loading="image_loading">
              <img
                className="upload_icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAAAXNSR0IArs4c6QAAAsxJREFUeAHt3NFt4lAQhtGAUkBKoYOEjnYr2e2IpIOUQgUQI+3rlS6zyL/GnDxavoznfFIekMzLiz8CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECzyCwe4YlT6fT4Xq9/p3Zdbfb/Toej98z93a+57Xzw9/x7G9L+PeZ+5fwbzP3db9n330Bz18TEL7m1v6U8O0T1hYQvubW/pTw7RPWFhC+5tb+lPDtE9YWEL7m1v6U8O0T1hYQvubW/pTw7RPWFhC+5tb+lPDtE9YWEL7m1v6U8O0T1hYQvubW/pTw7RPWFhC+5tb+lPDtE9YWEL7m1v6U8O0T1hYQvubW/pTw7RPWFhC+5tb+lPDtE9YWEL7m1v6U8O0T1hYQvubW/pTw7RPWFljtbdnbq8rLI6beRL3Nnv07LM86e++j7zuv9Yr2auFv76fPvqr8aM17Pu9yufy55/5H3ru8ov21fN7HIz9z9Fn+1Y9kNn5d+I0HHq0n/Ehm49eF33jg0XrCj2Q2fl34jQcerSf8SGbj14XfeODResKPZDZ+fbVv7m6/GBn88cDD7Ddy+/3+99L8O9T9vNbcZ/lJ048l/NQX8Ev45evy4+daAVJz/KtPyYfnCh8OkBovfEo+PFf4cIDUeOFT8uG5wocDpMYLn5IPzxU+HCA1XviUfHiu8OEAqfHCp+TDc4UPB0iNFz4lH54rfDhAarzwKfnwXOHDAVLjhU/Jh+cKHw6QGi98Sj48V/hwgNR44VPy4bnChwOkxgufkg/PFT4cIDVe+JR8eK7w4QCp8cKn5MNzhQ8HSI0XPiUfnrvaa9LhPc//fjxw5jFWe1V55mHcQ4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDA/wj8AAABMAn6pa8SAAAAAElFTkSuQmCC"
                alt="avatar"
              />
            </button>
          </div>
        </div>
        <div className="create_a_item create_a_item_focus false false">
          <textarea
            placeholder="Biography"
            className="ant-input create_desc_input"
          ></textarea>
        </div>
      </div>
    </>
  );
}
