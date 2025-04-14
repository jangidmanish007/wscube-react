'use client';
import { Dropdown, Form, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';

export default function CustomDropdown({
  items,
  selectedValue,
  itemId,
  isDisabled,
  searchBy,
  onSelectedSlug,
  onSelectValue,
}) {
  const [searchText, setSearchText] = useState('');
  const filteredItems = items?.filter((item) => item?.name.toLowerCase().includes(searchText.toLowerCase()));

  const handleItemClick = (id, name, slug) => {
    if (id) {
      onSelectValue(id, name);
    }
    if (slug) {
      onSelectedSlug(slug);
    }
  };

  return (
    <Form.Group className="position-relative">
      <div className="form-select-catgory">
        <Dropdown className="form-control px-0 py-0 border-0">
          <Dropdown.Toggle
            variant="none"
            className="w-100 text-start filter-box-dropdown bg-white py-2 d-flex align-items-center min-h-56"
            disabled={isDisabled}
          >
            <span className="pe-3 fw-400 base-color"> {selectedValue}</span>
            <div
              className="filter-box-dropdown-btn-img"
              style={{ backgroundImage: `url(/images/icons/arr-select.svg)`, backgroundSize: 'contain' }}
            ></div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100 card-border banner-filter-menu">
            {searchBy && (
              <div className="px-2 mb-2">
                <input
                  type="search"
                  placeholder="Search..."
                  onChange={(e) => setSearchText(e.target.value)}
                  className="form-control shadow-none card-border fs-14 select-search-box"
                />
              </div>
            )}
            {filteredItems?.map((item, key) => (
              <Dropdown.Item
                key={key}
                className={`py-2 fs-14 base-color ${
                  itemId === item.id || itemId === item.slug ? 'selected-items' : ''
                }`}
                value={item.id}
                onClick={() => handleItemClick(item?.id, item?.name, item?.slug)}
              >
                <span className="text-wrap">{item.name}</span>
              </Dropdown.Item>
            ))}
            {filteredItems?.length == 0 && <p className="mb-0 fs-14 text-center label-color-1">No Result Found</p>}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Form.Group>
  );
}

CustomDropdown.propTypes = {
  items: PropTypes.array,
  selectedValue: PropTypes.any,
  itemId: PropTypes.string,
  imageURL: PropTypes.string,
  isDisabled: PropTypes.object,
  searchBy: PropTypes.bool,
};
