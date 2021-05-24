const express = require('express');
const router = express();
const controller = require('../controller/index.js');
const multer = require('multer');
const upload = multer({ dest: 'public/img/' });

router.get('/', controller.getLogIn);
router.get('/signup', controller.getSignUp);
router.post('/signup', controller.postSignUp);
router.post('/signin', controller.postLogIn);
router.get('/profile/:email', controller.getProfile);
router.post('/edit/editUpdate', upload.single('avatar'), controller.updateEditProfile);
router.get('/edit/:email', controller.getEditProfile);
router.post('/edit/editAvatar', upload.single('avatar'), controller.updateEditProfile);
router.get('/timeline/:email', controller.getTimeline);
router.get('/about/:email', controller.getAbout);
router.post('/timeline/:email', controller.myTimeline);

router.post('/createPost/:email', upload.single('avatar'), controller.createPost);
router.post('/createComment/:email', controller.createComment);
router.get('/edit/deleteAcc/:email', controller.deleteAcc);
router.get('/deletePosts/:_id', controller.deletePost);
router.get('/postWithComments/:_id', controller.postWithComments);
// router.post('/timeline/:email', postUpload, controller.createPost);

module.exports = router;