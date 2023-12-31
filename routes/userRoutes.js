const express = require('express');
const userController = require('./../controllers/userController');
// TODO: Desestructuring
const authController = require('./../controllers/authController');

const router = express.Router();

//#region Register and Login routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
//#endregion

//#region Forget e Reset Password routes
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
//#endregion

// The protect middleware will run before the below routes
router.use(authController.protect);

//#region UserMe routes
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMyPassword', authController.updatePassword);
router.patch('/updateMe', userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
//#endregion

// The restrictTo will run before the below routes
router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
