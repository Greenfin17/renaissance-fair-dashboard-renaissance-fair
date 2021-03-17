import headerTitle from '../headerTitle';

const newSouvenirsForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  headerTitle('Add Souvenir');
  document.querySelector('#content-container').innerHTML = `
    <form id='submit-souvenirs-form' class='mb-4'>
      <div class='form-group'>
        <label for='title'>Souvenir Name</label>
        <input type='text' class='form-control' id='title' aria-describedby='souvenirTitle' placeholder='Enter Souvenir Title' required>
      </div>
      <div class='form-group'>
        <label for='image'>Image URL</label>
        <input type='url' class='form-control' id='image' placeholder='Image URL' required>
      </div>
      <div class='form-group'>
        <label for='price'>Price</label>
        <input type='text' class='form-control' id='price' placeholder='Book Price' required>
      </div>
      <div class='form-group'>
      <label for='description'>Souvenir Description</label>
      <input type='text' class='form-control' id='description' aria-describedby='souvenirDescription' placeholder='Enter Souvenir Description' required>
      </div>
      <button type='submit' id='submit-souvenirs' class='btn btn-primary'>Submit</button>
    </form>`;
};

export default newSouvenirsForm;